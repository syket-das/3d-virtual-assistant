// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAV4FTJsNFWaZ7hwESpd01_ItVdFjD6Z80',
  authDomain: 'assistant-ai-578ba.firebaseapp.com',
  projectId: 'assistant-ai-578ba',
  storageBucket: 'assistant-ai-578ba.appspot.com',
  messagingSenderId: '220794600799',
  appId: '1:220794600799:web:c74392835b21a0152ccaea',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
