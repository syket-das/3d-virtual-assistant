import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const SettingScreen = () => {
  return (
    <View>
      <Text className="text-center mt-8 font-bold text-lg text-black">
        SettingScreen
      </Text>

      <View className="mx-auto">
        <Text className="text-left mt-4 text-black text-xs">
          Open AI API Key
        </Text>
        <TextInput
          placeholder="Enter your name"
          className="border-2 border-gray-400 rounded-lg p-2 w-80 mt-2"
        />
        <TouchableOpacity className="mt-4">
          <Text className="text-center text-white bg-black p-2 rounded-lg">
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mx-4 mt-8">
        <Text className="text-left mt-4 text-red-500 font-bold text-xs">
          Why do I need an API Key?
        </Text>
        <Text className="text-left mt-2 text-black text-xs">
          The API key is used to authenticate your requests to the OpenAI API.
          You can get your API key from the OpenAI website.
        </Text>
      </View>
      <View className="mx-4 mt-2">
        <Text className="text-left mt-4 text-red-500 font-bold text-xs">
          How do I get an API Key?
        </Text>
        <Text className="text-left mt-2 text-black text-xs">
          You can get your API key from the OpenAI website. Once you have an API
          key, you can enter it in the input field above and click "Save" to
          authenticate your requests to the OpenAI API.
        </Text>
      </View>
    </View>
  );
};

export default SettingScreen;
