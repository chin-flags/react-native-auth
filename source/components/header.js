/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated, 
} from 'react-native';
import { layout } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: layout.sizes.padding * 1.5,
    paddingHorizontal: layout.sizes.padding,
    
  },
});

const Header = ({ headerHeight }) => {
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
    </View>
  );
};

export default Header;
