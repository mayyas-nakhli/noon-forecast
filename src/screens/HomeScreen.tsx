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

export default function HomeScreen({ route }: { route: any}) {
  const { width } = useWindowDimensions();
  const { data, isLoading } = useQuery(
    GetForecastQuery(route?.params?.query ? `${route.params.query}` : 'dubai')
  );
  const [dayIndex, setDayIndex] = useState(0);
  const hours24 = get24Hours(data?.forecast.forecastday, dayIndex);
  const statusBarHeight = Constants.statusBarHeight || 0;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <ScrollView
        style={[
          styles.scrollContainer,
          {
            marginTop: statusBarHeight + 10,
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
                <MapPinIcon size={24} color="#e0e0e0" />
                <Text>
                  <Text style={styles.textName}>{data.location.name} - </Text>
                  <Text style={styles.textCountry}>
                    {data.location.country}
                  </Text>
                </Text>
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
    gap: 10,

    minHeight: 20,

    marginTop: 30,
    marginHorizontal: 20,
  },
  textName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginEnd: 5,
  },
  textCountry: {
    color: '#d0d0d0',
    fontSize: 16,
  },
  scrollContainer: {
    marginTop: 30,
    marginBottom: 70,
  },
});
