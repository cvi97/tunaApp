import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import CustomInput from '../../components/CustomInput'
import StartButton from '../../components/StartButton'

const SignUpScreen = ({navigation}) => {

  const {control, handleSubmit, formState: {errors}} = useForm();


  const onSignUpPressed = (data) => {
    navigation.navigate("WaitConfirmation")
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <Text style={styles.text}>Email:</Text>
        <CustomInput 
          name="email"
          placeholder="Email" 
          control={control}
          rules={{required: 'Email requerido', pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Formato email inválido"
          } }}
        />
        <Text style={styles.text}>Tu nombre:</Text>
        <CustomInput 
          name="name"
          placeholder="Nombre" 
          control={control}
          rules={{required: 'Nombre requerido', maxLength: {value: 25, message: "Nombre demasiado largo"} }}
        />
        <Text style={styles.text}>¿Cómo te llaman en la tuna?</Text>
        <CustomInput 
          name="mote"
          placeholder="Mote"
          control={control}
          rules={{required: 'Mote requerido', maxLength: {value: 20, message: "Mote demasiado largo"}}}
        />
        <Text style={styles.text}>Elige una contraseña</Text>
        <CustomInput 
          name="password"
          placeholder="Contraseña" 
          control={control}
          rules={{required: 'Contraseña requerida', minLength: {value: 6, message: 'Contraseña muy corta'}}}
          secureTextEntry
        />
        <Text style={styles.text}>Código de tu tuna:</Text>
        <CustomInput 
          name="code"
          placeholder="Código de tu Tuna"
          control={control}
          rules={{required: 'Código requerido' }}
        />
        <StartButton onPress={handleSubmit(onSignUpPressed)} text="Registrarse"/>
        <StartButton onPress={onSignInPressed} text="¿Ya tienes una cuenta? Inicia sesión" type="TERTIARY"/>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3D69D',
    marginTop: 5,
  },
  text : {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 40,
    
  }
})

export default SignUpScreen 