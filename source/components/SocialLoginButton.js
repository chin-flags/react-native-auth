/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const SocialLoginButton = ({ image, provider }) => {
  const auth = useAuth();
  return (
    <TouchableOpacity onPress={() => auth.socialLogin[provider]()}>
      <Image source={image} style={{ width: 40, height: 40 }} />
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
