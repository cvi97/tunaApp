import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const NewButton = ({navigation, route, type}) => {
	var screen, buttonText;
	if (type === 'event') {
		screen = 'EventForm'
		buttonText = 'Nuevo evento'
	}
	else if (type === 'song') {
		screen = 'SongForm'
		buttonText = 'Nueva canción'
	}
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate(screen)}>
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