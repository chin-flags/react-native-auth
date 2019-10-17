import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStackNavigator,
    Home: HomeScreen,
  }),
);

export default AppNavigator;
