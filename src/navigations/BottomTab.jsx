import {Platform, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import useAnimationStore from '../store/animationStore';
import ChatScreen from '../screens/ChatScreen';
import TopTabs from './TopTabs';
import useVoiceStore from '../store/voiceStore';
import Voice from '@react-native-voice/voice';
import useMessageStore from '../store/messageStore';
import SettingScreen from '../screens/SettingScreen';
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: COLORS.white,
    // display: currentNavigation === 'Chats' ? 'none' : 'flex',
  },
};
const BottomTabNav = ({navigation}) => {
  const {text, isListening, setText, setIsListening} = useVoiceStore(
    state => state,
  );

  const {currentAnimation, setCurrentAnimation} = useAnimationStore(
    state => state,
  );

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    console.log(e);
  };

  const onSpeechEnd = e => {
    setIsListening(false);
    console.log(e);
  };

  const onSpeechResults = async e => {
    const texte = e.value[0];

    console.log(texte);
    setText(texte);
  };

  const onSpeechError = error => console.log(error);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="AI"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Messages"
        component={TopTabs}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Talk"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    currentAnimation === 'listen'
                      ? COLORS.primary
                      : COLORS.grey,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  width: Platform.OS == 'ios' ? 50 : 60,
                  top: Platform.OS == 'ios' ? -10 : -20,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,

                  borderWidth: 2,
                  borderColor: COLORS.white,
                }}
                onPressIn={async () => {
                  setCurrentAnimation('listen');
                  startListening();
                }}
                onPressOut={() => {
                  setCurrentAnimation('idle');
                  stopListening();
                }}>
                <Entypo
                  name="mic"
                  size={30}
                  color={focused ? COLORS.white : COLORS.black}
                />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="person-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
