/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
  }
});

const Separator = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      OR
    </Text>
  </View>
);

export default Separator;
