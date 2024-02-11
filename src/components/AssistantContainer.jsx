import {View, Text, TouchableOpacity} from 'react-native';
import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber/native';
import {Environment} from '@react-three/drei/native';
import useControls from 'r3f-native-orbitcontrols';
import Feather from 'react-native-vector-icons/Feather';
import Robot from './Robot';
import useAnimationStore from '../store/animationStore';
import useVoiceStore from '../store/voiceStore';
import useMessageStore from '../store/messageStore';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tts from 'react-native-tts';
import {Box} from '@react-three/drei/native';

const AssistantContainer = () => {
  const [OrbitControls, events] = useControls();

  const {text, isListening, setText, setIsListening} = useVoiceStore(
    state => state,
  );

  const {currentAnimation, setCurrentAnimation} = useAnimationStore(
    state => state,
  );

  const [isSpeaking, setIsSpeaking] = useState(false);

  const {
    messages,
    setMessages,
    generateAiMessage,
    lastAiMessageUnread,
    setLastAiMessageUnread,
  } = useMessageStore(state => state);

  Tts.setDefaultLanguage('en-IE');
  Tts.addEventListener('tts-start', event => console.log('start', event));
  Tts.addEventListener('tts-finish', event => console.log('finish', event));
  Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

  const readText = async t => {
    Tts.stop();
    setIsSpeaking(true);
    await Tts.speak(t);
    setIsSpeaking(false);
  };

  useEffect(() => {
    setLastAiMessageUnread('');
  }, []);

  useEffect(() => {
    if (lastAiMessageUnread) {
      readText(lastAiMessageUnread);
    }
  }, [lastAiMessageUnread]);

  const handleStop = () => {
    Tts.stop();
  };

  return (
    <View {...events} className="flex-1">
      <Canvas shadows className="relative flex-1">
        <ambientLight />

        <Suspense fallback={<Box />}>
          <group position={[0, -1.3, 3.0]}>
            <Robot />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
            <Environment preset="city" />
          </group>
        </Suspense>
      </Canvas>

      <View className="absolute top-[28%] right-[38%]  ">
        {currentAnimation === 'listen' && (
          <Feather name="rss" size={18} color="gray" />
        )}
      </View>
      <View className="absolute top-[10%] right-[2%]">
        <TouchableOpacity
          onPress={() => {}}
          className=" max-w-[60vw]
        rounded-lg shadow-lg p-4 mt-4
        "
          style={{
            backgroundColor: '#000',
            display: lastAiMessageUnread ? 'flex' : 'none',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {lastAiMessageUnread}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-[20%] left-[2%]">
        <TouchableOpacity
          onPress={() => {
            handleStop();
            setCurrentAnimation('idle');
            setCurrentAnimation('talk');
            readText('Hey, Whats up?');
          }}
          className=" max-w-[60vw]
       rounded-lg shadow-lg p-4
      "
          style={{
            backgroundColor: '#000',
          }}>
          <Entypo name="modern-mic" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentAnimation('idle');
            setCurrentAnimation('angry');
          }}
          className=" max-w-[60vw]
       rounded-lg shadow-lg p-4 mt-4
      "
          style={{
            backgroundColor: '#000',
          }}>
          <FontAwesome5 name="angry" size={18} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentAnimation('idle');
            setCurrentAnimation('thank');
          }}
          className=" max-w-[60vw]
       rounded-lg shadow-lg p-4 mt-4
      "
          style={{
            backgroundColor: '#000',
          }}>
          <Entypo name="emoji-happy" size={18} color="green" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCurrentAnimation('idle');
            setCurrentAnimation('clap');
          }}
          className=" max-w-[60vw]
       rounded-lg shadow-lg p-4 mt-4
      "
          style={{
            backgroundColor: '#000',
          }}>
          <MaterialCommunityIcons name="hand-clap" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-[20%] right-[2%]">
        <View
          style={{
            maxHeight: 200,
            width: '100%',
            display: text ? 'flex' : 'none',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            className=" max-w-[60vw]
        rounded-lg shadow-lg p-4 mt-4
        "
            style={{
              backgroundColor: '#000',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              {text}
            </Text>
          </TouchableOpacity>
          <View className="flex-row-reverse">
            <TouchableOpacity
              className=" ml-4  rounded-lg shadow-sm p-1 mt-2 border-2 border-green-500"
              onPress={async () => {
                setMessages([...messages, {content: text, role: 'user'}]);
                setLastAiMessageUnread('');
                await generateAiMessage();
                setText('');
              }}>
              <FontAwesome5 name="check" size={18} color="green" />
            </TouchableOpacity>
            <TouchableOpacity
              className=" rounded-lg shadow-sm p-1 mt-2 border-2 border-red-500"
              onPress={() => {
                setText('');
              }}>
              <FontAwesome5 name="times" size={18} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AssistantContainer;
