import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
     <Navigation /> 
    </QueryClientProvider>
  );
}
