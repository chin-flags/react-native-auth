/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { useAuth } from '../hooks/useAuth';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const auth = useAuth();
  const { user } = auth;
  return (
    <View>
      <Text>Welcome </Text>
      <Text>{user.email}</Text>
      <Button title="Sign Out" onPress={() => auth.signout()} />
    </View>
  )
};

export default HomeScreen;
