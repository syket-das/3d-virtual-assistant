import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const NavigationWrapper = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationWrapper;
