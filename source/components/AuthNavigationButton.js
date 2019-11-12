/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { layout } from '../utils/constants';

const AuthNavigationButton = ({ title, right, collapsed, active, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      backgroundColor: active ? 'teal' : 'white',
      elevation: 1,
      height: 50,
      width: layout.window.width * 0.4,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: right ? 20 : 0,
      borderBottomLeftRadius: right ? 20 : 0,
      borderTopRightRadius: right ? 0 : 20,
      borderBottomEndRadius: right ? 0 : 20,
    }}
    onPress={onPress}
  >
    <Text style={{
      color: active ? 'white' : '#3E5B79',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'notosans-regular',
    }}
    >
      { title.toUpperCase() }
    </Text>
  </TouchableOpacity>
)

export default AuthNavigationButton;
