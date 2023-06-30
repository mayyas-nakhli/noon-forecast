import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from './src/store/ThemeStore';

export default function App() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Navigation />
    </QueryClientProvider>
  );
}
