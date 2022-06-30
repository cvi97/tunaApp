import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../assets/logo-tuna.jpg'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'
//import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = ({navigation, route}) => {
  //const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSignInPressed = (data) => {
    console.log(data)
  }
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword")
  }
  const onSignUpPressed = () => {
    navigation.navigate("SignUp")
  }

  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <CustomInput 
          name="email" 
          placeholder="Email" 
          control={control} 
          rules={{required: 'Email requerido' }} 
        />
        <StartButton onPress={handleSubmit(onSignInPressed)} text="Entrar"/>
        <StartButton onPress={onSignUpPressed} text="Crear cuenta" bgColor="#D43E3E" fgColor="white"/>
        <StartButton onPress={onForgotPasswordPressed} text="Recuperar contraseña" type="TERTIARY"/>
        
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
    marginTop: 100
  },
  logo: {
    width: '50%',
    height: '50%',
    maxWidth: 300,
    marginBottom: 20,
  }
})

export default ForgotPasswordScreen