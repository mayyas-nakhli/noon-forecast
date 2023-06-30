import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/ThemeStore';
import ThemeSettings from '../components/ThemeSettings';
export default function SettingsScreen() {
  const themeState = useThemeStore();
  const backgroundImage =
    themeState.theme === 'dark'
      ? require('../../assets/background.png')
      : require('../../assets/background-light.png');
  return (
    <SafeAreaView
      style={{ flex: 1}}
    >
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <ThemeSettings />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    minWidth: '30%',
    height: '100%',
  },
});
