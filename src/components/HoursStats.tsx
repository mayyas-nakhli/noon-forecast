import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Hour } from '../schemas';
import { ClockIcon } from 'react-native-heroicons/solid';
import dayjs from 'dayjs';
import { CONDITION_IMAGE } from '../data/condition-image-map';

export default function HoursStats({ hours }: { hours: Hour[] }) {
  return (
    <View style={[styles.hoursContainer]}>
      <View style={styles.hoursTitleContainer}>
        <ClockIcon size={24} color={'#e0e0e0'} />
        <Text style={styles.hoursTitle}>Hourly Forecast</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.hourCardsContainer}
      >
        {hours.map((item) => (
          <View style={styles.hourCard} key={item.time}>
            <Text style={styles.cardTime}>
              {dayjs(item.time).format('h:mm A')}
            </Text>
            <Image
              source={CONDITION_IMAGE[item.is_day][item.condition.text]}
              style={styles.cardImage}
            />
            <Text style={styles.cardTemp}>{item.temp_c}&#176;</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hoursContainer: {
    marginTop: 40,
    marginStart: 20,
    paddingBottom: 40,
  },
  hoursTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  hoursTitle: {
    fontSize: 20,
    color: '#e0e0e0',
  },
  hourCardsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  hourCard: {
    alignItems: 'center',
    gap: 2,

    width: 100,
    minHeight: 50,

    marginEnd: 10,
    padding: 10,

    backgroundColor: 'rgba(13,18,30,0.5)',
    borderRadius: 10,
  },
  cardTime: {
    color: '#d0d0d0',
    fontSize: 12,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTemp: {
    color: '#e0e0e0',
    fontSize: 18,
  },
});
