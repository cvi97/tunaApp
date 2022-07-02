import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../components/Layout';

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
    <Layout>
      <View>
        <Text style={styles.title}>Bienvendo {user.mote}</Text>
      </View>
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
  },
});


export default HomeScreen