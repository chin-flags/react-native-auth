/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { layout } from '../utils/constants';
import SocialLoginButton from './SocialLoginButton';

const facebook = require('../../assets/images/facebook.png');
const twitter = require('../../assets/images/twitter.png');
const gmail = require('../../assets/images/gmail.png');
const phone = require('../../assets/images/phone.png');

const SocialLogin = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: layout.sizes.padding , justifyContent: 'space-between', marginTop: 20 }}>
      <SocialLoginButton image={facebook} provider="facebook" />
      <SocialLoginButton image={twitter} />
      <SocialLoginButton image={gmail} />
      <SocialLoginButton image={phone} />
    </View>
  );
};

export default SocialLogin;
