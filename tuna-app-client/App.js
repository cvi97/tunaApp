import React from 'react';
import { Textn, Button } from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SongListScreen from './screens/SongListScreen';
import EventListScreen from './screens/EventListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    card: '#F3D69D',
    text: 'black',
    TabBarText: '#566573',
  },
};


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        /*screenOptions={{
          headerStyle: { backgroundColor: '#F3D69D' },
          headerTitleStyle: { fontSize: 25 },
          //tabBarStyle: { backgroundColor: '#566573'},
        }}*/
      >
        <Tab.Screen options= {{headerRight: () => (<Button title="Nuevo Evento" color="black" />)}} name="Eventos" component={EventListScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen options= {{headerRight: () => (<Button title="Nueva Canción" color="black" />)}} name="Cancionero" component={SongListScreen} />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;