import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useWindowDimensions } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  const { width, height } = useWindowDimensions();
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
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName === 'home' ? 'home' : 'search'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#FD81B1',
          tabBarInactiveTintColor: 'gray',
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
