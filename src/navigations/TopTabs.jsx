import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import ChatScreen from '../screens/ChatScreen';

import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons/';
import COLORS from '../constants/colors';

const TopTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.white,
          },
          tabBarStyle: {
            backgroundColor: COLORS.primary,
          },
        }}>
        <Tab.Screen
          name="Chats"
          options={{
            tabBarLabelStyle: {color: COLORS.white},
            tabBarIcon: () => (
              <Ionicons
                name="people-circle-outline"
                size={24}
                color={COLORS.white}
              />
            ),
          }}
          component={ChatScreen}
        />
        <Tab.Screen
          name="instructions"
          component={ChatScreen}
          options={{
            tabBarLabelStyle: {color: COLORS.white},
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="assistant"
                size={24}
                color={COLORS.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
