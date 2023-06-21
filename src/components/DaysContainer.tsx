import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/solid'

export default function DaysContainer() {
  const days = ['Monday, 7 Jun', 'Tuesday, 8 Jun', "Wednesday, 9 Jun", "Thursday, 10 Jun"]
  return (
    <View style={styles.daysContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Today</Text>
        <View style={styles.moreDaysContainer}>
          <Text style={styles.moreDaysText}>7 days</Text>
          <ChevronRightIcon size={16} color="#e0e0e0"/>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.scrollStyle} showsHorizontalScrollIndicator={false}>
          {days.map((day, index ) => <Text key={day} style={[styles.dayPill, index === 0 ? styles.selectedDay : {} ]}>
            {day}
          </Text>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    marginTop: 50,
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
    color: "#e0e0e0"
  },
  scrollStyle: {
    display: 'flex',
    flexDirection: "row",
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
    borderColor:'#2B2D42',
    color: "#2B2D42",
  }

});
