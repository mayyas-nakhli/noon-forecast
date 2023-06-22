import { Text, View, StyleSheet, Image } from 'react-native';
import { Current, ForecastResponse } from '../schemas';
import { CONDITION_IMAGE } from '../data/condition-image-map';

export default function MainStats({
  forecast,
  sunrise,
  dayIndex,
}: {
  forecast: ForecastResponse;
  sunrise: string;
  dayIndex: number;
}) {
  const secondaryStats = [
    {
      imgSrc: require('../../assets/stats-icons/wind.png'),
      label: 'Wind',
      value: `${
        dayIndex === 0
          ? forecast.current.wind_kph
          : forecast.forecast.forecastday[dayIndex].day.maxwind_kph
      } KM/H`,
    },
    {
      imgSrc: require('../../assets/stats-icons/humidity.png'),
      label: 'Humidity',
      value: `${
        dayIndex === 0
          ? forecast.current.humidity
          : forecast.forecast.forecastday[dayIndex].day.avghumidity
      }%`,
    },
    {
      imgSrc: require('../../assets/stats-icons/sunrise.png'),
      label: 'Sunrise',
      value: `${
        dayIndex === 0
          ? sunrise
          : forecast.forecast.forecastday[dayIndex].astro.sunrise
      }`,
    },
  ];

  return (
    <View style={styles.mainStatsContainer}>
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
          <Text style={styles.mainText}>
            {dayIndex === 0
              ? Math.round(forecast.current.temp_c)
              : Math.round(forecast.forecast.forecastday[dayIndex].day.avgtemp_c)}
            &#176;
          </Text>
          <Text style={styles.subtitle}>
            {dayIndex === 0
              ? forecast.current.condition.text
              : forecast.forecast.forecastday[dayIndex].day.condition.text}
          </Text>
        </View>
      </View>
      <View style={styles.secondaryStats}>
        {secondaryStats.map((stat) => (
          <View style={styles.statCard} key={stat.label}>
            <Image source={stat.imgSrc} style={styles.statImage} />
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainStatsContainer: {
    minHeight: 300,

    marginTop: 10,
    marginHorizontal: 20,

    backgroundColor: 'rgba(13,18,30,0.5)',
    borderRadius: 10,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,

    marginHorizontal: 10,
  },
  weatherContainer: {
    flex: 1,
  },
  mainText: {
    color: '#efefef',
    fontSize: 50,
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
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',

    width: '30%',
    minHeight: 100,

    marginBottom: 20,
    padding: 10,

    borderRadius: 10,
  },
  statImage: {
    width: 20,
    height: 20,
  },
  statLabel: {
    color: '#e0e0e0',
  },
  statValue: {
    color: 'white',
    fontSize: 14,
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 20,
  },
});
