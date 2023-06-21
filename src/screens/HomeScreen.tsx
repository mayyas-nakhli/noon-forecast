import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import DaysContainer from '../components/DaysContainer';
import MainStats from '../components/MainStats';
import { useQuery } from '@tanstack/react-query';
import { GetForecastQuery } from '../requests/ForecastRequests';
import { apiClient } from '../services';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const { data, isLoading } = useQuery(GetForecastQuery());

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <DaysContainer />
      <MainStats />
      {!isLoading && data !== undefined ?<Text>{data.location.name}</Text> : <Text>Error</Text>}
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
});
