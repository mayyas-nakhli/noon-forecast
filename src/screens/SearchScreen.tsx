import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useCallback, useState} from 'react';
import { debounce } from 'lodash';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useQuery } from '@tanstack/react-query';
import { SearchQuery } from '../requests/SearchRequests';
export default function SearchScreen({ navigation }: { navigation: any }) {
  const [query, setQuery] = useState('');
  const { data} = useQuery(SearchQuery(query));
  const handleSearch = (value: string) => {
    setQuery(value);
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
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
            onChangeText={handleTextDebounce}
            placeholder="Search City"
            style={styles.textInput}
            placeholderTextColor={'#e0e0e099'}
          ></TextInput>
          <MagnifyingGlassIcon size={24} color={'#efefef'} />
        </View>
        {data !== undefined && data.length > 0 ? (
          <View style={styles.searchResults}>
            {data.map((item, index) => {
              const borderStyle =
                index === data.length - 1
                  ? {}
                  : { borderBottomWidth: 1, borderBottomColor: '#e0e0e0' };
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.jumpTo('Home', {
                      query: `${item.lat},${item.lon}`,
                    })
                  }
                  key={item.id}
                  style={[styles.location, borderStyle]}
                >
                  <MapPinIcon size={24} color={'#efefef'} />
                  <Text>
                    <Text
                      style={{ color: '#efefef', fontSize: 18, marginEnd: 10 }}
                    >
                      {`${item.name} - `}
                    </Text>
                    <Text style={{ color: '#e0e0e0', fontSize: 12 }}>
                      {item.country}
                    </Text>
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
    width: '90%',
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
  noResults: {
    padding: 20,
    color: '#efefef',
    fontSize: 18,
  },
});
