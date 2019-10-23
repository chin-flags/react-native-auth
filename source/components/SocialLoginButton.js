/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const SocialLoginButton = ({ image }) => {
  return (
    <TouchableOpacity>
      <Image source={image} style={{ width: 40, height: 40 }} />
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
