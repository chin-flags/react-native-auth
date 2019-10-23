/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { layout } from '../utils/constants';

const HeaderButton = ({ title, right, collapsed }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      backgroundColor: 'white',
      elevation: 1,
      height: 60,
      width: collapsed ? layout.window.width * 0.5 : layout.window.width * 0.4,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: collapsed ? 0 : right ? 20 : 0,
      borderBottomLeftRadius:collapsed ? 0 : right ? 20 : 0,
      borderTopRightRadius:collapsed ? 0 : right ? 0 : 20,
      borderBottomEndRadius:collapsed ? 0 : right ? 0 : 20,
    }}
  >
    <Text style={{
      color: '#3E5B79',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'notosans-regular',
    }}
    >
      { title }
    </Text>
  </TouchableOpacity>
)

export default HeaderButton;
