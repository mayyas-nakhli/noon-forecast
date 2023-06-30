import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LocationState {
  longitude: number;
  latitude: number;
  setLocation: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => any;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      latitude: 25.2048,
      longitude: 55.2708,
      setLocation: ({
        latitude,
        longitude,
      }: {
        latitude: number;
        longitude: number;
      }) =>
        set(() => ({
          latitude,
          longitude,
        })),
    }),
    {
      name: 'default-location',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
