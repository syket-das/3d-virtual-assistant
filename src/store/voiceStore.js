import {create} from 'zustand';

const useVoiceStore = create(set => ({
  text: '',
  isListening: false,
  setText: text => set({text}),
  setIsListening: isListening => set({isListening}),
}));

export default useVoiceStore;
