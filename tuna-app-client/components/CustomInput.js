import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({control, name, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
			<Controller
				control={control}
				name={name}
				render={({ onChange, onBlur, value }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						placeholder={placeholder}
						value={value}
						onChangeText={setValue}
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