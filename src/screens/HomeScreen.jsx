import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AssistantContainer from '../components/AssistantContainer';
import COLORS from '../constants/colors';
import Toast from 'react-native-toast-message';
const HomeScreen = () => {
  useEffect(() => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'This is the beta version of the app.',
      text2: 'Some features may not work. Please be patient.',
      visibilityTime: 4000,
      autoHide: true,
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <AssistantContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;
