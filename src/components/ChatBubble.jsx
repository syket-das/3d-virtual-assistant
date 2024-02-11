import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatBubble = ({chat, me, ai}) => {
  return (
    <View
      className={`flex-1 w-full  my-2 ${me ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{
          width: ai ? 10 : 30,
          height: ai ? 10 : 30,
          borderRadius: ai ? 5 : 15,
          //   borderTopLeftRadius: me ? 0 : 15,
          //   borderTopRightRadius: me ? 15 : 0,
          marginLeft: me ? 10 : 0,
          marginRight: me ? 0 : 10,
        }}
      />
      <View
        className={`bg-gray-300 ${ai ? 'max-w-[64vw]' : 'max-w-[85vw]'}   ${
          !me
            ? 'border-r-2 border-r-green-600 rounded-2xl rounded-tl-none'
            : 'border-l-2 border-l-blue-600 rounded-2xl rounded-tr-none'
        } px-2 `}>
        <Text
          className={`
        p-2 
        `}
          style={{
            fontSize: ai ? 10 : 14,
          }}>
          {chat}
        </Text>

        <Text
          className="text-xs text-gray-500"
          style={{
            alignSelf: me ? 'flex-end' : 'flex-start',
            marginRight: me ? 10 : 0,
            marginLeft: me ? 0 : 10,
            marginBottom: 5,

            display: ai ? 'none' : 'flex',
          }}>
          12:00 PM
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({});
