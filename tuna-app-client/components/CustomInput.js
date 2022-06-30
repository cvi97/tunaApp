import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
		<Controller
			name={name}			
			control={control}
			rules={rules}
			render={({field: {onChange, onBlur, value}, fieldState: {error} }) => (
				<>
					<View style={[styles.container, {borderColor: error ? 'red' : '#FFE5B0'}]}>
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							placeholder={placeholder}
							value={value}
							onChangeText={onChange}
							secureTextEntry={secureTextEntry}
						/>
					</View>
					{error && <Text style={styles.error}>{error.message || 'Error'}</Text>}
				</>
			)}
		/>
    
  )
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFE5B0',
		width: '80%',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'grey',
		marginBottom: 3,
		marginTop:7,
		paddingVertical: 8,
		paddingHorizontal: 10,
	},
	input: {
		fontSize: 16,
	},
	error: {
		color: 'red',
		fontSize: 13,
		alignSelf: 'stretch',
		marginLeft: 50,
		marginBottom: 5,
	}
})
    

export default CustomInput