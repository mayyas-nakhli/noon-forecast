import dayjs from 'dayjs';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { THEME } from '../data/theme';
function getDateList(): string[] {
  const dateList: string[] = [];
  const today = dayjs();

  for (let i = 0; i < 7; i++) {
    const date = today.add(i, 'day');
    dateList.push(date.format('dddd, D MMM'));
  }

  return dateList;
}
export default function DaysContainer({
  setDayIndex,
}: {
  setDayIndex: Function;
}) {
  const [days] = useState(getDateList());
  const [selectedDay, setSelectedDay] = useState(days[0]);
  let theme = useColorScheme();
  theme = theme === 'dark' ? theme : 'light';
  return (
    <View style={styles.daysContainer}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { color: THEME[theme].text_900 }]}>
          {selectedDay === days[0] ? 'Today' : selectedDay}
        </Text>
        <View style={styles.moreDaysContainer}>
          <Text style={{ color: THEME[theme].text_900 }}>7 days</Text>
          <ChevronRightIcon size={16} color={THEME[theme].text_900} />
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
              setDayIndex(index);
            }}
            key={day}
          >
            <Text
              style={[
                styles.dayPill,
                {
                  color: THEME[theme!].text_900,
                  borderColor: THEME[theme!].text_900,
                },
                selectedDay === day
                  ? {
                      ...styles.selectedDay,
                      borderColor: '#2B2D42',
                      color: '#2B2D42',
                    }
                  : {},
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
    marginStart: COLORS_AND_STYLES.margin_sm,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: COLORS_AND_STYLES.padding_sm,
  },
  headerText: {
    fontSize: COLORS_AND_STYLES.font_lg,
  },
  moreDaysContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_md,

    opacity: 0.6,
  },
  scrollStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: COLORS_AND_STYLES.margin_xs,
  },
  dayPill: {
    marginEnd: COLORS_AND_STYLES.margin_xs,
    paddingVertical: COLORS_AND_STYLES.padding_sm,
    paddingHorizontal: COLORS_AND_STYLES.padding_md,

    borderRadius: COLORS_AND_STYLES.border_radius_lg,
    borderWidth: 1,
  },
  selectedDay: {
    backgroundColor: COLORS_AND_STYLES.primary_400,
  },
});
