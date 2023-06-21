import { Text, View, StyleSheet, Image } from 'react-native';
import { Current } from '../schemas';
import { CONDITION_IMAGE } from '../data/condition-image-map';

export default function MainStats({
  current,
  sunrise,
}: {
  current: Current;
  sunrise: string;
}) {
  const secondaryStats = [
    {
      imgSrc: require('../../assets/stats-icons/wind.png'),
      label: 'Wind',
      value: `${current.wind_kph} KM/H`,
    },
    {
      imgSrc: require('../../assets/stats-icons/humidity.png'),
      label: 'Humidity',
      value: `${current.humidity}%`,
    },
    {
      imgSrc: require('../../assets/stats-icons/sunrise.png'),
      label: 'Sunrise',
      value: `${sunrise}`,
    },
  ];
  return (
    <View style={styles.mainStatsContainer}>
      <View style={styles.mainContent}>
        <Image
          source={CONDITION_IMAGE[current.is_day][current.condition.text]}
          style={styles.weatherImage}
        />
        <View style={styles.weatherContainer}>
          <Text style={styles.mainText}>{current.temp_c}&#176;</Text>
          <Text style={styles.subtitle}>{current.condition.text}</Text>
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
    fontSize: 60,
  },
  weatherImage: {
    width: '50%',
    height: 200,
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

    marginBottom: 20,
    padding: 10,

    borderRadius: 10,
    aspectRatio: '1/1',
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
    fontSize: 18,
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 20,
  },
});
