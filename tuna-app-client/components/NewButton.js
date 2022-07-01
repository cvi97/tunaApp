import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react'


const NewButton = ({navigation, type, setToken}) => {
	var screen, buttonText;
	if (type === 'event') {
		screen = 'EventForm'
		buttonText = 'Nuevo evento'
	}
	else if (type === 'song') {
		screen = 'SongForm'
		buttonText = 'Nueva canción'
	}
  else if (type === 'logout') {
    buttonText = 'Cerrar sesión'
  }

  const removeToken = () => {
    AsyncStorage.removeItem('@token').then(() => {
      setToken(null);
    })
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={screen ? (() => navigation.navigate(screen)) : (removeToken)}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ...
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#BB1616",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 12,
		marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
		fontWeight: "bold",
    alignSelf: "center"
  }
});

export default NewButton