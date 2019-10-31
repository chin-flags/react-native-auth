import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../screens/AuthScreen';

const AuthStackNavigator = createStackNavigator({
  Auth: AuthScreen,
});

export default AuthStackNavigator;
