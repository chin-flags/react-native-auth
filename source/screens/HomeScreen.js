/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import auth from '@react-native-firebase/auth';

const handleSignOut = async (navigate) => {
  try {
    auth().signOut();
    navigate('AuthStack');
    // remove AsyncStorage data
  } catch (err) {
    alert(err);
  }
};

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const user = useNavigationParam('user');
  return (
    <View>
      <Text>Welcome </Text>
      <Text>{user.email}</Text>
      <Button title="Sign Out" onPress={() => handleSignOut(navigate)} />
    </View>
  )
};

export default HomeScreen;
