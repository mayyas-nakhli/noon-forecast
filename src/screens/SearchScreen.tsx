import { Image, SafeAreaView, StyleSheet } from 'react-native';
export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
        blurRadius={150}
      />
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
