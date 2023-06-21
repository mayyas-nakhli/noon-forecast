import { Text, View, StyleSheet, Image } from 'react-native';

export default function MainStats() {
  const secondaryStats = [
    {
      imgSrc: require('../../assets/stats-icons/wind.png'),
      label: 'Wind',
      value: '12 km/h',
    },
    {
      imgSrc: require('../../assets/stats-icons/humidity.png'),
      label: 'Humidity',
      value: '70%',
    },
    {
      imgSrc: require('../../assets/stats-icons/sunrise.png'),
      label: 'Sunrise',
      value: '6:04 AM',
    },
  ];
  return (
    <View style={styles.mainStatsContainer}>
      <View style={styles.mainContent}>
        <Image
          source={require('../../assets/weather-icons/cloudy.png')}
          style={styles.weatherImage}
        />
        <Text style={styles.mainText}>10&#176;</Text>
      </View>
      <View style={styles.secondaryStats}>
        {secondaryStats.map((stat) => (
          <View style={styles.statCard} key={stat.label}>
            <Image source={stat.imgSrc} style={styles.statImage}/>
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

    marginTop: 80,
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
  mainText: {
    color: '#efefef',
    fontSize: 70,
  },
  weatherImage: {
    width: 200,
    height: 200,
  },
  secondaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statCard: {
    gap: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    aspectRatio: '1/1',
    padding: 10,
    marginBottom: 20,
  },
  statImage: {
    width: 24,
    height: 24,
  },
  statLabel: {
    color: '#e0e0e0'
  },
  statValue: {
    color: 'white',
    fontSize: 20,
  }
});
