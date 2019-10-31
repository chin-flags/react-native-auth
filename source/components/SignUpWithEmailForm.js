/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
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
import auth from '@react-native-firebase/auth';

import { emailRegEx } from '../utils/constants';

const styles = StyleSheet.create({
  text_input: {
    width: '100%',
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
    zIndex: 2,
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
  },
});

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const {
    register,
    setValue,
    errors,
    handleSubmit,
  } = useForm();

  const handleSignUp = async (newUser) => {
    const { email, password } = newUser;
    setLoading(true);
    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);
      
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <View>
      <TextInput
        style={{ ...styles.text_input, borderBottomColor: errors.firstName ? 'red' : '#80cbc4' }}
        placeholder="FIRST NAME"
        ref={register({ name: 'firstName' }, { required: true })}
        onChangeText={(text) => setValue('firstName', text, true)}
      />
      <Text style={styles.field_error_text}>
        {
          errors.firstName && errors.firstName.type === 'required' && 'First Name is Required'
        }
      </Text>
      <TextInput
        style={{ ...styles.text_input, borderBottomColor: errors.lastName ? 'red' : '#80cbc4' }}
        placeholder="LAST NAME"
        ref={register({ name: 'lastName' }, { required: true })}
        onChangeText={(text) => setValue('lastName', text, true)}
      />
      <Text style={styles.field_error_text}>
        {
          errors.lastName && errors.lastName.type === 'required' && 'Last Name is Required'
        }
      </Text>
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
      {
        formError.error ? (
          <Text style={styles.error_text}>
            {formError.error}
          </Text>
        )
          : null
      }
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleSignUp)}
      >
        <ActivityIndicator animatingcolor="white" animating={loading} />
        <Text style={styles.button_text}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default SignUpForm;
