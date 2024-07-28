// navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ComingSoonScreen from './screens/ComingSonScreen';
import SearchScreen from './screens/SearchScreen';
import DownloadScreen from './screens/DownloadScreen';
import EpisodScreen from './screens/EpisodScreen';
import { RootStackParamList } from './type';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EpisodScreen" component={EpisodScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = '';
            let IconComponent: React.ComponentType<any> = Ionicons;

            if (route.name === 'Home') {
              IconComponent = FontAwesome;
              iconName = 'home';
            } else if (route.name === 'Coming Soon') {
              IconComponent = MaterialCommunityIcons;
              iconName = 'animation-play';
            } else if (route.name === 'Search') {
              IconComponent = Ionicons;
              iconName = 'search-sharp';
            } else if (route.name === 'Download') {
              IconComponent = Ionicons;
              iconName = 'download';
            }

            return <IconComponent name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            color: "gray",
            fontSize: 16,
            paddingBottom: 8,
          },
          tabBarStyle: {
            height: 75,
            paddingVertical: 10,
            backgroundColor: 'black',
            borderTopWidth: 0,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Coming Soon" component={ComingSoonScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
