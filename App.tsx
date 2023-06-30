import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from './src/store/ThemeStore';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  let systemTheme = useColorScheme();
  const themeState = useThemeStore();
  useEffect(() => {
    if (themeState.system)
      themeState.setThemeState({
        theme: systemTheme as 'light' | 'dark',
        system: true,
      });
  }, [systemTheme]);
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style={themeState.theme === 'dark' ? 'light' : 'dark'} />
      <Navigation />
    </QueryClientProvider>
  );
}
