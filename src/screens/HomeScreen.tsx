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
import Skeleton from '../components/Skeleton';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { get24Hours } from '../utils/hours';
import HoursStats from '../components/HoursStats';
import { useState, useLayoutEffect, useRef } from 'react';
import Constants from 'expo-constants';

export default function HomeScreen() {
  const { width} = useWindowDimensions();
  const { data, isLoading } = useQuery(GetForecastQuery());
  const hours24 = get24Hours(data?.forecast.forecastday);
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
          <>
            <Skeleton
              width={width - 50}
              height={80}
              style={{ borderRadius: 10, marginTop: 50, marginHorizontal: 25 }}
            ></Skeleton>
            <Skeleton
              width={width - 100}
              height={20}
              style={{ borderRadius: 30, marginTop: 10, marginHorizontal: 25 }}
            ></Skeleton>
            <Skeleton
              width={width - 50}
              height={300}
              style={{ borderRadius: 10, marginTop: 10, marginHorizontal: 25 }}
            ></Skeleton>
          </>
        ) : (
          data !== undefined && (
            <>
              <DaysContainer />
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
                current={data.current}
                sunrise={data.forecast.forecastday[0].astro.sunrise}
              />
              <HoursStats
                hours={hours24}
              />
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
  },
});
