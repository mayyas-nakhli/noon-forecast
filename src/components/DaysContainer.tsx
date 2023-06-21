import dayjs from 'dayjs';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
function getDateList(): string[] {
  const dateList: string[] = [];
  const today = dayjs();

  for (let i = 0; i < 7; i++) {
    const date = today.add(i, 'day');
    dateList.push(date.format('dddd, D MMM'));
  }

  return dateList;
}
export default function DaysContainer() {
  const [days] = useState(getDateList());
  const [selectedDay, setSelectedDay] = useState(days[0]);
  return (
    <View style={styles.daysContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{selectedDay === days[0] ? 'Today' : selectedDay}</Text>
        <View style={styles.moreDaysContainer}>
          <Text style={styles.moreDaysText}>7 days</Text>
          <ChevronRightIcon size={16} color="#e0e0e0" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.scrollStyle}
        showsHorizontalScrollIndicator={false}
      >
        {days.map((day, index) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedDay(day);
            }}
            key={day}
          >
            <Text
              style={[
                styles.dayPill,
                selectedDay === day ? styles.selectedDay : {},
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    marginStart: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    color: '#efefef',
    fontSize: 25,
  },
  moreDaysContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    opacity: 0.6,
  },
  moreDaysText: {
    color: '#e0e0e0',
  },
  scrollStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  dayPill: {
    marginEnd: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedDay: {
    backgroundColor: '#FD81B1',
    borderColor: '#2B2D42',
    color: '#2B2D42',
  },
});
