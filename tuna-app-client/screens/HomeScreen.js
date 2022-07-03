import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../components/Layout';
import Logo from '../assets/digitaltuna-name.png'

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

  const onProfilePress = () => {
    console.log('profile pressed')
  }

  return (
    <Layout>
      <View>
        <Image source={Logo} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.title}>Bienvendo {user.mote}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onProfilePress()}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button : {
    backgroundColor: '#00bcd4',
    padding: 10,
    margin: 10,
    borderRadius: 5,
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
  }
});


export default HomeScreen