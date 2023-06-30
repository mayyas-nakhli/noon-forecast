import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import DaysContainer from '../components/DaysContainer';
import MainStats from '../components/MainStats';
import { useQuery } from '@tanstack/react-query';
import { GetForecastQuery } from '../requests/ForecastRequests';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { get24Hours } from '../utils/hours';
import HoursStats from '../components/HoursStats';
import { useState } from 'react';
import Constants from 'expo-constants';
import HomeScreenSkeleton from '../components/HomeScreenSkeleton';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { THEME } from '../data/theme';
import { useThemeStore } from '../store/ThemeStore';
import { useLocationStore } from '../store/LocationStore';

export default function HomeScreen({ route }: { route: any }) {
  const { width } = useWindowDimensions();
  const locationState = useLocationStore();
  const { data, isLoading } = useQuery(
    GetForecastQuery(
      route?.params?.query
        ? `${route.params.query}`
        : `${locationState.latitude},${locationState.longitude}`
    )
  );
  const [dayIndex, setDayIndex] = useState(0);
  const hours24 = get24Hours(data?.forecast.forecastday, dayIndex);
  const statusBarHeight = Constants.statusBarHeight || 0;
  const theme = useThemeStore((state) => state.theme);
  const wallpaperImage =
    theme === 'dark'
      ? require('../../assets/background.png')
      : require('../../assets/background-light.png');
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={wallpaperImage}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <ScrollView
        style={[
          styles.scrollContainer,
          {
            marginTop: statusBarHeight + COLORS_AND_STYLES.margin_sm,
          },
        ]}
      >
        {isLoading ? (
          <HomeScreenSkeleton width={width} />
        ) : (
          data !== undefined && (
            <>
              <DaysContainer setDayIndex={setDayIndex} />
              <View style={styles.location}>
                <MapPinIcon size={24} color={THEME[theme!].text_600} />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <Text
                    style={[styles.textName, { color: THEME[theme!].text_700 }]}
                  >
                    {data.location.name}
                  </Text>
                  <Text
                    style={[
                      styles.textCountry,
                      { color: THEME[theme!].text_600 },
                    ]}
                  >
                    {data.location.country}
                  </Text>
                </View>
              </View>
              <MainStats
                forecast={data}
                dayIndex={dayIndex}
                sunrise={data.forecast.forecastday[0].astro.sunrise}
              />
              <HoursStats hours={hours24} />
            </>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: COLORS_AND_STYLES.gap_lg,

    minHeight: 20,

    marginTop: 30,
    marginHorizontal: COLORS_AND_STYLES.margin_sm,
  },
  textName: {
    fontSize: COLORS_AND_STYLES.font_lg,
    fontWeight: '900',
  },
  textCountry: {
    fontSize: COLORS_AND_STYLES.font_md,
  },
  scrollContainer: {
    marginTop: 30,
  },
});
