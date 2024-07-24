import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Fontisto, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeScreen from './screens/HomeScreen';
import ComingSoonScreen from './screens/ComingSonScreen';
import SearchScreen from './screens/SearchScreen';
import DownloadScreen from './screens/DownloadScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
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
            color: "white",
            fontSize: 16, 
            paddingBottom: 8, 
          },
          tabBarStyle: {
            height: 75, 
            paddingVertical: 10, 
            backgroundColor: 'black', 
            borderTopWidth: 0, 
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Coming Soon" component={ComingSoonScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
