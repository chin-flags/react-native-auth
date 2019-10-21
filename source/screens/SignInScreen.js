/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import
{
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useForm from 'react-hook-form';
import axios from 'axios';

import { emailRegEx } from '../utils/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  content: {
    padding: 20,
    elevation: 2,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text_input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  error_text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  field_error_text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  }
});

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    setValue,
    errors,
    handleSubmit,
  } = useForm();

  const handleLogin = (user) => {
    setLoading(true)
    axios.post('https://us-central1-react-native-auth-functions.cloudfunctions.net/api/signin', user)
      .then((res) => console.log(res.data))
      .catch((err) => {
        setFormError(err.response.data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SIGN IN</Text>
        <TextInput
          style={{ ...styles.text_input, borderBottomColor: errors.email ? 'red' : '#80cbc4' }}
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCompleteType="email"
          ref={register({ name: 'email' }, { required: true, pattern: emailRegEx })}
          onChangeText={(text) => setValue('email', text, true)}
        />
        <Text style={styles.field_error_text}>
          {
            errors.email && errors.email.type === 'required' && 'Email is Required'
          }
          {
            errors.email && errors.email.type === 'pattern' && 'Email is not valid'
          }
        </Text>
        <TextInput
          style={{ ...styles.text_input, borderBottomColor: errors.password ? 'red' : '#80cbc4' }}
          placeholder="PASSWORD"
          secureTextEntry
          autoCompleteType="password"
          ref={register({ name: 'password' }, { required: true })}
          onChangeText={(text) => setValue('password', text, true)}
        />
        <Text style={styles.field_error_text}>
          {
            errors.password && errors.password.type === 'required' && 'Password is Required'
          }
        </Text>
        <Text style={styles.error_text}>
          {
            formError && formError.error
          }
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSubmit(handleLogin)}
        >
          <ActivityIndicator animatingcolor="white" animating={loading} />
          <Text style={styles.button_text}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignInScreen.navigationOptions = {
  header: null,
};


export default SignInScreen;
