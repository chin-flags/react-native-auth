/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import
{
  View,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { layout } from '../utils/constants';
import Header from '../components/header';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SignUpSignInButtons from '../components/SignUpSignInButtons'

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
  const headerHeight = new Animated.Value(layout.window.height / 6);
  const [signInActive, setSignInActive] = useState(true);

  return (
    <View style={{flex:1}}>
      <Header title="Sign In" headerHeight={headerHeight} signInActive={signInActive} setSignInActive={setSignInActive} />
      <SignUpSignInButtons signInActive={signInActive} setSignInActive={setSignInActive} />
      <ScrollView style={{flex: 1 }} keyboardShouldPersistTaps='handled' >
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
