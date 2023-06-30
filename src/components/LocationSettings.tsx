import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { LockClosedIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useThemeStore } from '../store/ThemeStore';
import { THEME } from '../data/theme';
import { useState, useEffect } from 'react';
import { getForegroundPermissionsAsync } from 'expo-location';
import { openSettings } from 'expo-linking';

export default function LocationSettings() {
  const theme = useThemeStore((state) => state.theme);
  const [status, setStatus] = useState<string>('');

  // TODO: listen to change of permission and update status
  useEffect(() => {
    (async () => {
      const permissionStatus = await getForegroundPermissionsAsync();
      setStatus(permissionStatus.status);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <LockClosedIcon
          size={24}
          color={THEME[theme].text_800}
        ></LockClosedIcon>
        <Text style={[styles.heading, { color: THEME[theme].text_800 }]}>
          Permissions Settings
        </Text>
      </View>
      <TouchableOpacity disabled={status === 'granted'} onPress={openSettings}>
        <View
          style={[
            styles.settingCard,
            {
              borderColor: THEME[theme].text_800,
            },
          ]}
        >
          <View style={styles.settingLabel}>
            <MapPinIcon color={THEME[theme].text_800} size={16} />
            <Text style={{ color: THEME[theme].text_800 }}>
              Location Permission
            </Text>
          </View>
          <Text
            style={{
              color: THEME[theme].text_600,
              fontSize: COLORS_AND_STYLES.font_sm,
              paddingStart: COLORS_AND_STYLES.padding_md,
              textTransform: 'capitalize',
            }}
          >
            {status}
          </Text>
        </View>
      </TouchableOpacity>
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
  settingCard: {
    width: '100%',
    minHeight: 50,

    marginTop: COLORS_AND_STYLES.margin_sm,
    padding: COLORS_AND_STYLES.padding_sm,

    borderRadius: COLORS_AND_STYLES.border_radius_md,

    borderWidth: 1,
  },
  settingLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_sm,
  },
  settingButton: {
    padding: COLORS_AND_STYLES.padding_sm,

    borderRadius: COLORS_AND_STYLES.border_radius_sm,
    borderWidth: 1,
  },
});
