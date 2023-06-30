import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  useColorScheme,
} from 'react-native';
import { Hour } from '../schemas';
import { ClockIcon } from 'react-native-heroicons/solid';
import dayjs from 'dayjs';
import { CONDITION_IMAGE } from '../data/condition-image-map';
import { THEME } from '../data/theme';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { useThemeStore } from '../store/ThemeStore';

export default function HoursStats({ hours }: { hours: Hour[] }) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <View style={[styles.hoursContainer]}>
      <View style={styles.hoursTitleContainer}>
        <ClockIcon size={24} color={THEME[theme].text_600} />
        <Text style={[styles.hoursTitle, { color: THEME[theme].text_700 }]}>
          Hourly Forecast
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.hourCardsContainer}
      >
        {hours.map((item) => (
          <View style={[styles.hourCard, {backgroundColor: THEME[theme!].card_bg_transparent}]} key={item.time}>
            <Text style={[styles.cardTime, {color: THEME[theme!].text_600}]}>
              {dayjs(item.time).format('h:mm A')}
            </Text>
            <Image
              source={CONDITION_IMAGE[item.is_day][item.condition.text]}
              style={styles.cardImage}
            />
            <Text style={[styles.cardTemp,{color: THEME[theme!].text_700}]}>{item.temp_c}&#176;</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hoursContainer: {
    marginTop: COLORS_AND_STYLES.margin_md,
    marginStart: COLORS_AND_STYLES.margin_sm,
    paddingBottom: COLORS_AND_STYLES.padding_lg,
  },
  hoursTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_lg,
  },
  hoursTitle: {
    fontSize: COLORS_AND_STYLES.font_lg,
    fontWeight: 'bold',
  },
  hourCardsContainer: {
    marginTop: COLORS_AND_STYLES.margin_sm,
    display: 'flex',
    flexDirection: 'row',
  },
  hourCard: {
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_sm,

    width: 100,
    minHeight: 50,

    marginEnd: COLORS_AND_STYLES.margin_xs,
    padding: COLORS_AND_STYLES.padding_sm,

    borderRadius: COLORS_AND_STYLES.border_radius_lg,
  },
  cardTime: {
    fontSize: COLORS_AND_STYLES.font_sm,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTemp: {
    fontSize: COLORS_AND_STYLES.font_md,
    fontWeight: 'bold'
  },
});
