import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import DaysContainer from '../components/DaysContainer';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/background.png")} style={styles.backgroundImage} blurRadius={150}/>
       <DaysContainer /> 
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
