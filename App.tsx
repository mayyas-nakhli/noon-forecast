import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from './src/store/ThemeStore';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { useLocationStore } from './src/store/LocationStore';
import { DEFAULT_LOCATION } from './src/data/location';
import { locationPermissionAlert } from './src/data/alerts';
export default function App() {
  let systemTheme = useColorScheme();
  const themeState = useThemeStore();
  const locationStore = useLocationStore();
  useEffect(() => {
    if (themeState.system)
      themeState.setThemeState({
        theme: systemTheme as 'light' | 'dark',
        system: true,
      });
  }, [systemTheme]);
  // TODO: listen to change of permission and update location
  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // TODO: Should do some modal with styling for light and dark themes.
        locationPermissionAlert();

        locationStore.setLocation({
          latitude: DEFAULT_LOCATION.latitude,
          longitude: DEFAULT_LOCATION.longitude,
        });
        return;
      }

      let location = await getCurrentPositionAsync({});
      locationStore.setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style={themeState.theme === 'dark' ? 'light' : 'dark'} />
      <Navigation />
    </QueryClientProvider>
  );
}
