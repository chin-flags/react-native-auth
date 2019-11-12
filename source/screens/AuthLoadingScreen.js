/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import
{
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { useAuth } from '../hooks/useAuth';

const AuthLoadingScreen = () => {
  const { navigate } = useNavigation();
  const auth = useAuth();

  useEffect(() => {
    const { user } = auth;
    if (user) {
      navigate('Home');
    } else {
      navigate('AuthStack');
    }
  }, []);


  return (
    <View style={{flex: 1}}>
      <Text>Have we met?</Text>
      <ActivityIndicator />
    </View>
  );
};

AuthLoadingScreen.navigationOptions = {
  header: null,
};

export default AuthLoadingScreen;
