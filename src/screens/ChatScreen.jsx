import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import ChatBubble from '../components/ChatBubble';

import ChatInput from '../components/ChatInput';
import useMessageStore from '../store/messageStore';

const ChatScreen = () => {
  const {messages} = useMessageStore(state => state);

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 mx-2" showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            chat={message.content}
            me={message.role === 'user'}
            ai={!message.role === 'user'}
          />
        ))}
      </ScrollView>

      <ChatInput />
    </View>
  );
};

export default ChatScreen;
