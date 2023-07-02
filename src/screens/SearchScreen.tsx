import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useQuery } from '@tanstack/react-query';
import { SearchQuery } from '../requests/SearchRequests';
import { COLORS_AND_STYLES } from '../data/colors-and-styles';
import { THEME } from '../data/theme';
import { useThemeStore } from '../store/ThemeStore';
export default function SearchScreen({ navigation }: { navigation: any }) {
  const [query, setQuery] = useState('');
  const { data, isError } = useQuery(SearchQuery(query));
  const theme = useThemeStore((state) => state.theme);
  const handleSearch = (value: string) => {
    setQuery(value);
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const backgroundImage =
    theme === 'dark'
      ? require('../../assets/background.png')
      : require('../../assets/background-light.png');

  if (isError) {
    // TODO: should find a better way to handle API errors
    navigation.navigate('Error');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        blurRadius={150}
      />
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: THEME[theme].card_bg_transparent },
          ]}
        >
          <TextInput
            onChangeText={handleTextDebounce}
            placeholder="Search City..."
            style={[styles.textInput, { color: THEME[theme!].text_700 }]}
            placeholderTextColor={THEME[theme].text_400}
          ></TextInput>
          <MagnifyingGlassIcon size={24} color={THEME[theme].text_700} />
        </View>
        {data !== undefined && data.length > 0 ? (
          <View
            style={[
              styles.searchResults,
              { backgroundColor: THEME[theme].card_bg_transparent },
            ]}
          >
            {data.map((item, index) => {
              const borderStyle =
                index === data.length - 1
                  ? {}
                  : {
                      borderBottomWidth: 1,
                      borderBottomColor: THEME[theme!].text_400,
                    };
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
                  <MapPinIcon size={24} color={THEME[theme!].text_600} />
                  <Text>
                    <Text
                      style={[
                        styles.locationCity,
                        { color: THEME[theme!].text_700 },
                      ]}
                    >
                      {`${item.name} - `}
                    </Text>
                    <Text style={[styles.locationCountry]}>{item.country}</Text>
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
    paddingHorizontal: COLORS_AND_STYLES.padding_md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,

    marginTop: COLORS_AND_STYLES.margin_lg,
    paddingEnd: COLORS_AND_STYLES.padding_md,

    borderRadius: COLORS_AND_STYLES.border_radius_lg,
  },
  textInput: {
    paddingVertical: COLORS_AND_STYLES.padding_md,
    paddingStart: COLORS_AND_STYLES.padding_md,
    fontSize: COLORS_AND_STYLES.font_md,
    width: '90%',
  },
  searchResults: {
    marginTop: COLORS_AND_STYLES.margin_xs,

    borderRadius: COLORS_AND_STYLES.border_radius_lg,
  },
  location: {
    flexDirection: 'row',
    gap: COLORS_AND_STYLES.gap_lg,
    padding: COLORS_AND_STYLES.padding_md,
  },
  locationCity: {
    fontSize: COLORS_AND_STYLES.font_md,
    marginEnd: COLORS_AND_STYLES.margin_xs,
  },
  locationCountry: {
    fontSize: COLORS_AND_STYLES.font_sm,
    color: COLORS_AND_STYLES.text_500,
  },
});
