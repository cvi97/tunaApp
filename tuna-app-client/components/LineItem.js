import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LineItem = ({line}) => {
  
	//var chord = line.split('[').pop().split(']'); //
	//var chord = line.split('[')[1].split(']')[0];
	//var chord = line.split(/[\[(.*?)\]]/);

	// gets the chracters between the brackets
	//let str = "hy my name is: { name } and i am { age } old";
  let chords = [];
  let letter = [];
  let vars = line.split(/({.*?})/);
  vars.forEach(element => {
    if(element.slice(0, 1) == "{") {
      chords.push(element);
    } else {
      letter.push(element);
      for (let i = 0; i < element.length; i++) {
        chords.push(" ");
      }
    }
  });
  console.log(chords);
  return (
    <View style={styles.line}>
      <Text style={styles.text}>{chords}</Text>
      <Text style={styles.text}>{letter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    justifyContent: 'space-between',
    marginleft: 1000,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 1,
  }
})


export default LineItem