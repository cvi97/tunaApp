import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import Layout from '../components/Layout'

const EventFormScreen = () => {

  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: '',
  })

  return (
    <Layout>  
      <TextInput style={styles.title}
        placeholder="Dale un nombre al evento"
      />
      <TextInput style={styles.description}
        placeholder="Descripción del evento"
      />
      <TouchableOpacity style={styles.button} disabled>
        <Text color="white">Crear evento</Text>
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
  description: {
    height: 100,
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
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

export default EventFormScreen