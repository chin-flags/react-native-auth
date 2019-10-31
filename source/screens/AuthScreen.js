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
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

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

const AuthScreen = () => {
  const headerHeight = new Animated.Value(layout.window.height / 4);
  const [collapsed, setCollapsed] = useState(false);
  const [signInActive, setSignInActive] = useState(true);
  const keyBoardDidShow = (event) => {
    Animated.timing(headerHeight, {
      duration: event.duration,
      toValue: 30,
    }).start();
    setCollapsed(true);
  };
  const keyBoardDidHide = (event) => {
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
      <Header title="Sign In" headerHeight={headerHeight} collapsed={collapsed} signInActive={signInActive} setSignInActive={setSignInActive} />
      <ScrollView style={{flex: 1 }}>
        <View style={styles.container}>
          {
            signInActive ? <SignIn /> : <SignUp />
          }
        </View>
      </ScrollView>
    </View>
  );
};

AuthScreen.navigationOptions = {
  header: null,
};

export default withNavigation(AuthScreen);
