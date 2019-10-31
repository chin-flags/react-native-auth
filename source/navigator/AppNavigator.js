import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    AuthStack: AuthStackNavigator,
    Home: HomeScreen,
  }),
);

export default AppNavigator;
