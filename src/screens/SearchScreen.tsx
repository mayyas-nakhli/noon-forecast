import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
export default function SearchScreen({ navigation }: { navigation: any }) {
  const location = [1,2,3];
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search City"
            style={styles.textInput}
            placeholderTextColor={'#e0e0e0'}
          ></TextInput>
          <MagnifyingGlassIcon size={24} color={'#efefef'} />
        </View>
        {location.length > 0 ? (
          <View style={styles.searchResults}>
            {location.map((item, index) => {
              const borderStyle =
                index === location.length - 1
                  ? {}
                  : { borderBottomWidth: 1, borderBottomColor: '#e0e0e0' };
              return (
                <TouchableOpacity key={item} style={[styles.location, borderStyle]}>
                  <MapPinIcon size={24} color={"#efefef"}/>
                  <Text >
                    <Text style={{ color: '#efefef', fontSize: 18, marginEnd: 10 }}>
                      London - 
                    </Text>
                    <Text style={{ color: '#e0e0e0', fontSize: 12 }}>
                       {` United Kingdom`}</Text>
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
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
  searchContainer: {
    position: 'relative',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,

    marginTop: 50,
    paddingEnd: 20,

    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 25,
  },
  textInput: {
    paddingVertical: 20,
    paddingStart: 20,
    maxWidth: '90%',
    color: '#efefef',
  },
  searchResults: {
    marginTop: 10,

    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
  },
  location: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
