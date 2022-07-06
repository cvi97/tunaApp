import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../components/Layout';
import Logo from '../assets/digitaltuna-name.png'
import EscudoTDA from '../assets/EscudoTDA.jpg'
import tdaCastillo from '../assets/tdaCastillo.jpg'

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

  const onProfilePress = () => {
    console.log('profile pressed')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvendo {user.mote}</Text>
        <Image source={Logo} style={styles.logo} resizeMode="contain"/>
      <View style={styles.middleContainer}>
        <Image source={tdaCastillo} style={styles.escudo} resizeMode="contain"/>
        <Image source={EscudoTDA} style={styles.escudo} resizeMode="contain"/>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onProfilePress()}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button : {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#BB1616',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  logo: {
    width: '60%',
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  escudo: {
    width: '45%',
  },
  container : {
    flex: 1,
    backgroundColor: '#FCF3CF',
    borderTopWidth: 2,
    borderTopColor: 'black',
  },
  middleContainer: {
    alignItems: 'center',
    backgroundColor: '#EFE9B7',
    height: '60%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});


export default HomeScreen