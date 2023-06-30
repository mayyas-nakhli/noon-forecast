import {
  View,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import {
  MoonIcon,
  PaintBrushIcon,
  SunIcon,
  WrenchScrewdriverIcon,
} from 'react-native-heroicons/solid';
import { THEME } from '../data/theme';
import { useThemeStore } from '../store/ThemeStore';
export default function ThemeSettings() {
  const systemTheme = useColorScheme();
  const themeState = useThemeStore();
  const themes = [
    {
      label: 'Light',
      icon: (color: string) => (
        <SunIcon size={COLORS_AND_STYLES.font_lg} color={color} />
      ),
      action: () => {
        themeState.setThemeState({ theme: 'light', system: false });
      },
      selected: themeState.theme === 'light' && !themeState.system,
    },
    {
      label: 'Dark',
      icon: (color: string) => (
        <MoonIcon size={COLORS_AND_STYLES.font_lg} color={color} />
      ),
      action: () => {
        themeState.setThemeState({ theme: 'dark', system: false });
      },

      selected: themeState.theme === 'dark' && !themeState.system,
    },
    {
      label: 'System default',
      icon: (color: string) => (
        <WrenchScrewdriverIcon size={COLORS_AND_STYLES.font_lg} color={color} />
      ),
      action: () => {
        themeState.setThemeState({
          theme: systemTheme as 'light' | 'dark',
          system: true,
        });
      },

      selected: themeState.system,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <PaintBrushIcon
          size={COLORS_AND_STYLES.font_lg}
          color={THEME[themeState.theme].text_800}
        />
        <Text
          style={[styles.heading, { color: THEME[themeState.theme].text_800 }]}
        >
          Theme Settings
        </Text>
      </View>

      <View style={styles.themesContainer}>
        {themes.map((item) => {
          const color: string = item.selected
            ? THEME[themeState.theme].primary_500
            : THEME[themeState.theme].text_700;
          return (
            <TouchableOpacity onPress={item.action} key={item.label}>
              <View
                style={[
                  styles.themeCard,
                  {
                    borderColor: item.selected
                      ? THEME[themeState.theme].primary_500
                      : THEME[themeState.theme].text_700,
                    backgroundColor: item.selected
                      ? THEME[themeState.theme].primary_50
                      : 'transparent',
                  },
                ]}
              >
                {item.icon(color)}
                <Text
                  style={{
                    color,
                  }}
                >
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: COLORS_AND_STYLES.padding_md,
    marginTop: COLORS_AND_STYLES.margin_md,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_lg,
  },
  heading: {
    fontSize: COLORS_AND_STYLES.font_lg,
    fontWeight: 'bold',
  },
  themesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: COLORS_AND_STYLES.gap_sm,

    width: '100%',

    paddingVertical: COLORS_AND_STYLES.padding_md,
  },
  themeCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: COLORS_AND_STYLES.gap_md,

    aspectRatio: 1 / 1,

    padding: COLORS_AND_STYLES.padding_md,

    borderWidth: 1,
    borderRadius: COLORS_AND_STYLES.border_radius_md,
  },
});
