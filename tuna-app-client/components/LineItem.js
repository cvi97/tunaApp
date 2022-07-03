import { View, Text } from 'react-native'
import React from 'react'

const LineItem = ({line}) => {
  
	//var chord = line.split('[').pop().split(']'); //
	//var chord = line.split('[')[1].split(']')[0];
	//var chord = line.split(/[\[(.*?)\]]/);

	// gets the chracters between the brackets
	let str = "hy my name is: {{ name }} and i am {{ age }} old";
  let vars = str.split(/({{.*?}})/);
  console.log(vars);
  return (
    <View>
      <Text>{vars}</Text>
    </View>
  )
}

export default LineItem