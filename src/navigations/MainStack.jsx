import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNav from './BottomTab';
import RegisterScreen from '../screens/RegisterScreen';
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomTabNav} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default MainStack;
