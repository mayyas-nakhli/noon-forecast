import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useWindowDimensions, useColorScheme } from 'react-native';
import { THEME } from './data/theme';
import { useThemeStore } from './store/ThemeStore';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  const theme = useThemeStore((state) => state.theme);
  const { width } = useWindowDimensions();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: width / 4,
            width: width / 2,
            flex: 1,
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
            height: 50,
            borderTopWidth: 0,
            shadowColor: 'transparent',
            backgroundColor: THEME[theme!].stats_card_bg_transparent,
          },
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = route.name.toLowerCase();

            return (
              //
              <Ionicons
                name={iconName as 'home' | 'search' | 'settings'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: THEME[theme!].primary_400,
          tabBarInactiveTintColor: THEME[theme!].text_600,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarLabel: '' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
