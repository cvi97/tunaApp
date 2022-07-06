import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform, Button } from 'react-native'
import React, { useState } from 'react'
import DateSelector from '../components/DateSelector'
import { useNavigation } from '@react-navigation/native'

import Layout from '../components/Layout'
import { saveSong } from '../api'

const SongFormScreen = () => {
  const navigation = useNavigation();
  const [song, setSong] = useState({
    name: '',
    author: '',
    lyrics: '',
  })

    // when crear song button is pressed
  const handleSubmit = () => {
    if(song.name.length > 0 && song.author.length > 0 && song.lyrics.length !== 0) {
      saveSong(song)
      navigation.navigate('SongList');
    }
    else {
      Alert.alert('Error', 'Todos los campos son obligatorios')
    }
  }

  return (
    <Layout>  
      <TextInput style={styles.title}
        placeholder="Nombre"
        onChangeText={(text) => setSong({...song, name: text})}
      />
      <TextInput style={styles.title}
        placeholder="Autor"
        onChangeText={(text) => setSong({...song, author: text})}
      />
      <TextInput style={styles.lyrics} multiline
        placeholder="Letra"
        onChangeText={(text) => setSong({...song, lyrics: text})}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text color="white">Crear canción</Text>
      </TouchableOpacity>
    </Layout>
  )
}


const styles = StyleSheet.create({
  title: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16
  },
  lyrics: {
    height: 400,
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#BB1616',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SongFormScreen