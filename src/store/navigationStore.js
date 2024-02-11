import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  currentNavigation: 'Home',
  setCurrentNavigation: (currentNavigation) => set({ currentNavigation }),
}));

export default useNavigationStore;
