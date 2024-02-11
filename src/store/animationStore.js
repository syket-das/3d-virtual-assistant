import {create} from 'zustand';

const useAnimationStore = create(set => ({
  currentAnimation: 'idle',
  setCurrentAnimation: currentAnimation => set({currentAnimation}),
}));

export default useAnimationStore;
