import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
				placeholder={placeholder}
				value={value}
				onChangeText={setValue}
				secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
		backgroundColor: '#FFE5B0',
		width: '80%',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'grey',
		marginVertical: 10,
		paddingHorizontal: 10,
	},
	input: {
	} 
})
    

export default CustomInput