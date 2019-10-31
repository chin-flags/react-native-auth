/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import Separator from './Separator';
import SocialLogin from './SocialLogin';
import SignUpWithEmailForm from './SignUpWithEmailForm';


const SignUp = () => (
  <View>
    <SignUpWithEmailForm />
    <Separator />
    <SocialLogin />
  </View>
);

export default SignUp;
