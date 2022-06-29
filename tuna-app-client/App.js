import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewButton from './components/NewButton'
import Logo from './assets/logo-tuna.jpg'

import HomeScreen from './screens/HomeScreen';
import SongListScreen from './screens/SongListScreen';
import SongFormScreen from './screens/SongFormScreen';
import EventListScreen from './screens/EventListScreen';
import EventFormScreen from './screens/EventFormScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import EventScreen from './screens/EventScreen';

const EventStack = createStackNavigator();
const SongStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isLoggedIn = false;

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    card: '#F3D69D',
    text: 'black',
    fontSize: 40,
    TabBarText: '#566573',
  },
};

function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="EventList" component={EventListScreen} 
        options={({ navigation }) => ({
          title: "Eventos",
          headerRight: () => (
            <NewButton navigation={navigation} type="event"/>
          ),
        })}
      />
      <EventStack.Screen name="EventForm" component={EventFormScreen} 
        options= {{
          title: "Nuevo evento",
        }} 
      />
      <EventStack.Screen name="EventScreen" component={EventScreen}
        options= {{
          title: "Evento",
        }}
      />
    </EventStack.Navigator>
  );
}

function SongStackScreen() {
  return (
    <SongStack.Navigator>
      <SongStack.Screen name="SongList" component={SongListScreen} 
        options={({ navigation }) => ({
          title: "Canciones",
          headerRight: () => (
            <NewButton navigation={navigation} type="song"/>
          ),
        })}
      />
      <SongStack.Screen name="SongForm" component={SongFormScreen} 
        options= {{
            title: "Nueva canción",
          }}
        />
    </SongStack.Navigator>	
  );
}


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        {isLoggedIn ? (
          <Tab.Group>
            <Tab.Screen name="Eventos" component={EventStackScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cancionero" component={SongStackScreen} options={{ headerShown: false }} />
          </Tab.Group>
        ) : (
          <Tab.Group>
            <Tab.Screen name="SignIn" component={SignInScreen} 
              options={{
                title: "Inicio de sesión",
              }}
            />
            <Tab.Screen name="SignUp" isLoggedIn={isLoggedIn} component={SignUpScreen} 
              options={{
                title: "Crea una cuenta",
                headerRight: () => (
                  <Image source={Logo} style={{width: 50, height: 50, marginRight: 20}}/>
                ),
              }}
            />
          </Tab.Group>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );


}
export default App;