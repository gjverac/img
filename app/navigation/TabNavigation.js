import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Main/HomeScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import SearchScreen from '../screens/Main/SearchScreen';
import PersonScreen from '../screens/Main/PersonScreen';
import FavoritesScreen from '../screens/Main/FavoritesScreen';
import AddScreen from '../screens/Main/AddScreen';



const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'cog' : 'cog-outline';
        }else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }else if (route.name === 'Person') {
            iconName = focused ? 'person' : 'person-outline';
          }else if (route.name === 'Favorites') {
            iconName = focused ? 'heart-half' : 'heart-half-outline';
          }else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Person" component={PersonScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Add" component={AddScreen} />
  </Tab.Navigator>
    
  );
}