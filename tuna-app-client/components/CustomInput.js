import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
			<Controller
				name={name}			
				control={control}
				rules={rules}
				render={({field: {onChange, onBlur, value}, fieldState: {error} }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						placeholder={placeholder}
						value={value}
						onChangeText={onChange}
						secureTextEntry={secureTextEntry}
					/>
				)}
			/>
    </View>
  )
}

const styles = StyleSheet.create({
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