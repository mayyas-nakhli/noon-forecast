import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeState {
  theme: 'dark' | 'light';
  system: boolean;
  setThemeState: ({
    theme,
    system,
  }: {
    theme: 'dark' | 'light';
    system: boolean;
  }) => any;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      system: true,
      setThemeState: ({ theme, system }) => set(() => ({ theme, system })),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
