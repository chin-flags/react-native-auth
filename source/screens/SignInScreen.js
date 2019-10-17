/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import
{
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
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
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#80cbc4',
    paddingHorizontal: 5,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 8,
    borderRadius: 10,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
  }
});

const SignInScreen = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SIGN IN</Text>
        <TextInput style={styles.text_input} placeholder="EMAIL" autoCompleteType="email" onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.text_input} placeholder="PASSWORD" secureTextEntry autoCompleteType="password" onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.button_text}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

SignInScreen.navigationOptions = {
  header: null,
};


export default SignInScreen;
