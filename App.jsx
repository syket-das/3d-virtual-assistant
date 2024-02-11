import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import Voice from '@react-native-voice/voice';
import NavigationWrapper from './src/navigations/NavigationWrapper';
import MainStack from './src/navigations/MainStack';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationWrapper>
      <MainStack />
      <Toast
        position="bottom"
        autoHide
        visibilityTime={2000}
        topOffset={30}
        bottomOffset={40}
      />
    </NavigationWrapper>
  );
};

export default App;
