/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated, 
} from 'react-native';
import { layout } from '../utils/constants';
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

const Header = ({ headerHeight, collapsed, signInActive, setSignInActive }) => {
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
        <HeaderButton title="Sign In" collapsed={collapsed} active={signInActive} onPress={() => setSignInActive(true)} />
        <HeaderButton title="Sign Up" right collapsed={collapsed} active={!signInActive} onPress={() => setSignInActive(false)} />
      </View>
    </View>
  );
};

export default Header;
