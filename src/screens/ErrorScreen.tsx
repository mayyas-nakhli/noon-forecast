import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  DevSettings,
} from 'react-native';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { useThemeStore } from '../store/ThemeStore';
import { THEME } from '../data/theme';

export default function ErrorScreen() {
  const theme = useThemeStore((state) => state.theme);
  const backgroundImage =
    theme === 'dark'
      ? require('../../assets/background.png')
      : require('../../assets/background-light.png');

  const handlePress = () => {
    // TODO: should research more to check how to reload in production build.
    DevSettings.reload();
  };
  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        blurRadius={120}
      />

      <Image
        source={require('../../assets/weather-icons/code-red.png')}
        style={styles.errorImage}
      />
      <Text
        style={[
          styles.errorText,
          {
            color: THEME[theme].text_800,
          },
        ]}
      >
        An error happened. Please check you internet connection and try again.
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.reloadButton}>
          <Text style={styles.reloadButtonText}>Reload</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorImage: {
    maxWidth: 300,
    maxHeight: 300,
  },
  errorText: {
    paddingHorizontal: COLORS_AND_STYLES.padding_lg,
    fontSize: COLORS_AND_STYLES.font_md,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  reloadButton: {
    alignItems: 'center',

    minWidth: 200,

    marginTop: COLORS_AND_STYLES.margin_lg,
    padding: COLORS_AND_STYLES.padding_sm,

    borderWidth: 1,
    borderColor: COLORS_AND_STYLES.red_400,
    borderRadius: COLORS_AND_STYLES.border_radius_lg,
  },
  reloadButtonText: {
    fontSize: COLORS_AND_STYLES.font_md,
    color: COLORS_AND_STYLES.red_400,
  },
});
