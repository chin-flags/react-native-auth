/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { colors, layout } from '../utils/constants';
import HeaderButton from './headerButton';

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: layout.sizes.padding,
    borderBottomLeftRadius: layout.sizes.padding,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    paddingTop: layout.sizes.padding * 1.5,
    paddingHorizontal: layout.sizes.padding,
  },
});

const Header = ({ headerHeight, collapsed }) => {
  
  return (
    <View>
      <Animated.View style={{...styles.container, height: headerHeight }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'teal',
              fontFamily: 'notosans-bold',
            }}
          >
            Hi There,
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: 'teal',
              fontFamily: 'notosans-bold',
            }}
          >
            Let's get started
          </Text>
        </View>
      </Animated.View>
      <View style={{width: '100%', zIndex: 1, position: 'absolute', bottom: -30, flexDirection: 'row', justifyContent: 'space-between'}}>
        <HeaderButton title="Sign Up" collapsed={collapsed} />
        <HeaderButton title="Sign In" right collapsed={collapsed} />
      </View>
    </View>
  );
};

export default Header;
