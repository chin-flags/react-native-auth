import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStackNavigator = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

export default AuthStackNavigator;
