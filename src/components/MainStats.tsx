import { Text, View, StyleSheet, Image, useColorScheme } from 'react-native';
import { ForecastResponse } from '../schemas';
import { CONDITION_IMAGE } from '../data/condition-image-map';
import { THEME } from '../data/theme';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { uvIndexColor } from '../utils/uv';
import { useThemeStore } from '../store/ThemeStore';
export default function MainStats({
  forecast,
  sunrise,
  dayIndex,
}: {
  forecast: ForecastResponse;
  sunrise: string;
  dayIndex: number;
}) {
  const theme = useThemeStore((state) => state.theme);

  const secondaryStats = [
    {
      imgSrc: theme === 'dark' ? require('../../assets/stats-icons/wind-dark.png') : require('../../assets/stats-icons/wind-light.png'),
      label: 'Wind',
      value: `${
        dayIndex === 0
          ? forecast.current.wind_kph
          : forecast.forecast.forecastday[dayIndex].day.maxwind_kph
      } KM/H`,
    },
    {
      imgSrc: theme === 'dark' ? require('../../assets/stats-icons/humidity-dark.png') : require('../../assets/stats-icons/humidity-light.png'),
      label: 'Humidity',
      value: `${
        dayIndex === 0
          ? forecast.current.humidity
          : forecast.forecast.forecastday[dayIndex].day.avghumidity
      }%`,
    },
    {
      imgSrc: theme === 'dark' ? require('../../assets/stats-icons/uv-dark.png') : require('../../assets/stats-icons/uv-light.png'),
      label: 'UV Index',
      value: 
        dayIndex === 0
          ?  forecast.current.uv 
          : forecast.forecast.forecastday[dayIndex].day.uv
      ,
    },
  ];

  return (
    <View
      style={[
        styles.mainStatsContainer,
        { backgroundColor: THEME[theme].card_bg_transparent },
      ]}
    >
      <View style={styles.mainContent}>
        <Image
          source={
            dayIndex === 0
              ? CONDITION_IMAGE[forecast.current.is_day][
                  forecast.current.condition.text
                ]
              : CONDITION_IMAGE[1][
                  forecast.forecast.forecastday[dayIndex].day.condition.text
                ]
          }
          style={styles.weatherImage}
        />
        <View style={styles.weatherContainer}>
          <Text style={[styles.mainText, {color: THEME[theme].text_600}]}>
            {dayIndex === 0
              ? Math.round(forecast.current.temp_c)
              : Math.round(
                  forecast.forecast.forecastday[dayIndex].day.avgtemp_c
                )}
            &#176;
          </Text>
          <Text style={[styles.subtitle, {color: THEME[theme].text_600}]}>
            {dayIndex === 0
              ? forecast.current.condition.text
              : forecast.forecast.forecastday[dayIndex].day.condition.text}
          </Text>
        </View>
      </View>
      <View style={styles.secondaryStats}>
        {secondaryStats.map((stat) => (
          <View style={[styles.statCard, {backgroundColor: THEME[theme!].stats_card_bg_transparent}]} key={stat.label}>
            <Image source={stat.imgSrc} style={styles.statImage} />
            <Text style={[{color: THEME[theme!].text_600}]}>{stat.label}</Text>
            <Text style={[styles.statValue, {color: THEME[theme!].text_800}, stat.label === 'UV Index' ? {color: uvIndexColor(+stat.value)}: {}]}>{stat.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainStatsContainer: {
    minHeight: 300,

    marginTop: COLORS_AND_STYLES.margin_xs,
    marginHorizontal: COLORS_AND_STYLES.margin_sm,

    borderRadius: COLORS_AND_STYLES.border_radius_md,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_lg,

    marginHorizontal: COLORS_AND_STYLES.margin_xs,
  },
  weatherContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: COLORS_AND_STYLES.font_xlg,
  },
  weatherImage: {
    width: 200,
    maxHeight: 200,
  },
  secondaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statCard: {
    gap: COLORS_AND_STYLES.gap_sm,
    alignItems: 'center',
    justifyContent: 'center',

    width: '30%',
    minHeight: 100,

    marginBottom: COLORS_AND_STYLES.margin_sm,
    padding: COLORS_AND_STYLES.padding_sm,

    borderRadius: COLORS_AND_STYLES.border_radius_lg,
  },
  statImage: {
    width: 20,
    height: 20,
  },
  statValue: {
    fontSize: COLORS_AND_STYLES.font_md,
  },
  subtitle: {
    fontSize: COLORS_AND_STYLES.font_lg,
  },
});
