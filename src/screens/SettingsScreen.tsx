import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/ThemeStore';
import ThemeSettings from '../components/ThemeSettings';
import LocationSettings from '../components/LocationSettings';
export default function SettingsScreen() {
  const themeState = useThemeStore();
  const backgroundImage =
    themeState.theme === 'dark'
      ? require('../../assets/background.png')
      : require('../../assets/background-light.png');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      {/* Settings input must be buttons I think. */}
      <ThemeSettings />
      <LocationSettings />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
