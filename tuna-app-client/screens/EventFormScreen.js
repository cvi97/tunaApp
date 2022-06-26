import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform, Button } from 'react-native'
import React, { useState } from 'react'
import DateSelector from '../components/DateSelector'

import Layout from '../components/Layout'
import { saveEvent } from '../api'

const EventFormScreen = ({navigation}) => {

  const [event, setEvent] = useState({
    name: '',
    description: '',
    creator: 1,
    date: '',
  })


  // when crear event button is pressed
  const handleSubmit = () => {
    if(event.name.length > 0 && event.description.length > 0 && event.date.length !== 0) {
      saveEvent(event)
      navigation.navigate('EventList');
    }
    else {
      Alert.alert('Error', 'Todos los campos son obligatorios')
    }
  }
  //function to get the date from the date selector component
  //increments in 1 day the date because javascript return one day off when changes the date to string
  const childToParent = (childData) => {
    childData.setDate(childData.getDate()+1);
    setEvent({...event, date: childData.getFullYear() + '-' + (childData.getMonth() + 1) + '-' + childData.getDate()})
  }

  return (
    <Layout>  
      <TextInput style={styles.title}
        placeholder="Dale un nombre al evento"
        onChangeText={(text) => setEvent({...event, name: text})}
      />
      <TextInput style={styles.description}
        placeholder="Descripción del evento"
        onChangeText={(text) => setEvent({...event, description: text})}
      />
      <DateSelector childToParent={childToParent}/>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
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