import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useMessageStore from '../store/messageStore';

const ChatInput = () => {
  const {messages, setMessages, generateAiMessage} = useMessageStore(
    state => state,
  );

  const [message, setMessage] = React.useState({
    content: '',
    role: 'user',
  });

  const handleSend = async () => {
    if (message.content.trim() === '') return;
    setMessages([...messages, message]);

    const aiMessage = await generateAiMessage();

    setMessage({
      content: '',
      role: 'user',
    });
  };

  return (
    <View className=" flex-row justify-between items-center p-2 mb-2 mx-2">
      <Ionicons name="add-circle" size={24} />
      <TextInput
        value={message.content}
        onChangeText={text => setMessage({...message, content: text})}
        style={{
          backgroundColor: '#e9e9e9',
          borderRadius: 10,
          padding: 10,
          flex: 1,
          marginHorizontal: 10,
        }}
        placeholder="Text Input.."
        className="flex-1 h-auto"
      />
      <TouchableOpacity onPress={handleSend}>
        <Ionicons name="send" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
