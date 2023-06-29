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
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  CalculatorIcon,
} from 'react-native-heroicons/solid';
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
        <View style={styles.headerTextContainer}>
          <CalendarDaysIcon size={24} color={THEME[theme].text_600} />
          <Text style={[styles.headerText, { color: THEME[theme].text_700 }]}>
            {selectedDay === days[0] ? 'Today' : selectedDay}
          </Text>
        </View>
        <View style={styles.moreDaysContainer}>
          <Text style={{ color: THEME[theme].text_950 }}>7 days</Text>
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
                      fontWeight: 'bold',
                      backgroundColor: THEME[theme!].primary_400,
                      borderColor: THEME[theme!].primary_500,
                      color: THEME[theme!].text_100,
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
    paddingStart: 0,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_lg,
  },
  headerText: {
    fontSize: COLORS_AND_STYLES.font_lg,
    fontWeight: 'bold',
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
});
