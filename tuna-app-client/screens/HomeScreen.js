import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [user, setUser] = useState(0);
  const refreshUser = () => {
    AsyncStorage.getItem('@user') .then(user => {
      setUser(JSON.parse(user));
    }) .catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    refreshUser();
  } , [])
  console.log(user)


  return (
    <View>
      <Text>Bienvendo {user.mote}</Text>
    </View>
  );
};

export default HomeScreen