/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = () => (
  <View style={{ alignSelf: 'center', flexDirection: 'row',justifyContent:'center', width: '80%',paddingBottom:10, borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 20 }}>
    <Text style={{ fontSize: 18, fontStyle: 'italic',}}>OR</Text>
  </View>
);

export default Separator;
