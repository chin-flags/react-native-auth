/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import
{
  View,
  StyleSheet,
  Animated,
  Keyboard,
  ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { layout } from '../utils/constants';

import Header from '../components/header';
import Separator from '../components/Separator';
import SocialLogin from '../components/SocialLogin';
import SignInForm from '../components/SignInForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text_input: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
});

const SignInScreen = (props) => {
  const headerHeight = new Animated.Value(layout.window.height / 4);
  const [collapsed, setCollapsed] = useState(false);

  const keyBoardDidShow = (event) => {
    console.log('header', headerHeight);
    Animated.timing(headerHeight, {
      duration: event.duration,
      toValue: 30,
    }).start();
    setCollapsed(true);
  };
  const keyBoardDidHide = (event) => {
    console.log('header', headerHeight);
    Animated.timing(headerHeight, {
      duration: event.duration,
      toValue: layout.window.height / 4,
    }).start();
    setCollapsed(false);
  };

  useEffect(() => {
    const keyBoardShowSub = Keyboard.addListener('keyboardDidShow', keyBoardDidShow);
    const keyboardHideSub = Keyboard.addListener('keyboardDidHide', keyBoardDidHide);
    return () => {
      keyBoardShowSub.remove();
      keyboardHideSub.remove();
    };
  });

  return (
    <View style={{flex:1}}>
      <Header title="Sign In" headerHeight={headerHeight} collapsed={collapsed} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <SignInForm />
          <Separator />
          <SocialLogin />
        </View>
      </ScrollView>
    </View>
  );
};

SignInScreen.navigationOptions = {
  header: null,
};

export default withNavigation(SignInScreen);
