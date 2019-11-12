import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthStackNavigator from './AuthStackNavigator';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStackNavigator,
    Home: HomeScreen,
  }),
);

export default AppNavigator;
