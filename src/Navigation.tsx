import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useWindowDimensions, Alert } from 'react-native';
import { THEME } from './data/theme';
import { useThemeStore } from './store/ThemeStore';
import SettingsScreen from './screens/SettingsScreen';
import ErrorScreen from './screens/ErrorScreen';
import { setJSExceptionHandler } from 'react-native-exception-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const errorHandler = (callback: Function) => {
  callback();
};
function AppTabs() {
  const navigation = useNavigation();
  setJSExceptionHandler(
    () =>
      errorHandler(() => {
        //@ts-ignore
        navigation.navigate('Error');
      }),
    true
  );
  const theme = useThemeStore((state) => state.theme);
  const { width } = useWindowDimensions();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          // [TODO]: Should do something about the placement with keyboard open .
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
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AppTabs" component={AppTabs}></Stack.Screen>
        <Stack.Screen name="Error" component={ErrorScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
