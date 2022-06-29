import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'


// Component button for log in and sign up
const StartButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[ 
        styles['container'], 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}
    >
      <Text 
        style={[
          styles.buttonText, 
          styles[`buttonText_${type}`], 
          bgColor ? {color: fgColor} : {}
        ]} >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  container_PRIMARY: {
    backgroundColor: "#BB1616",
    elevation: 8,
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '50%',
  },
  container_TERTIARY: {
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  buttonText_PRIMARY: {
  },
  buttonText_TERTIARY: {
    color: "grey",
  }
});

export default StartButton