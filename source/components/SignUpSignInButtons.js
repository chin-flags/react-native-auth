/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import { layout } from '../utils/constants';
import AuthNavigationButton from './AuthNavigationButton'; 

const SignUpSignInButtons = ({ signInActive, setSignInActive }) => (
  <View style={{width: '100%', zIndex: 1,marginTop: layout.sizes.margin, flexDirection: 'row', justifyContent: 'space-between'}}>
    <AuthNavigationButton title="Sign In" active={signInActive} onPress={() => setSignInActive(true)} />
    <AuthNavigationButton title="Sign Up" active={!signInActive} right onPress={() => setSignInActive(false)} />
  </View>
)

export default SignUpSignInButtons;
