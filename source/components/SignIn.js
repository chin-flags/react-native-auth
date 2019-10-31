/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import Separator from './Separator';
import SignInWithEmailForm from './SignInWithEmailForm';
import SocialLogin from './SocialLogin'

const SignIn = () => (
  <View>
    <SignInWithEmailForm />
    <Separator />
    <SocialLogin />
  </View>
);

export default SignIn;
