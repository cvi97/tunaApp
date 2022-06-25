import React from 'react';
import { Text } from 'react-native'
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SongListScreen from './screens/SongListScreen';
import EventListScreen from './screens/EventListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cancionero" component={SongListScreen} />
        <Tab.Screen name="Eventos" component={EventListScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;