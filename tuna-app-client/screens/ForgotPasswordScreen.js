import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../assets/logo-tuna.jpg'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'
//import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = ({navigation, route}) => {

  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSendPressed= (data) => {
    console.log(data)
    navigation.navigate("ResetPassword")
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height * 0.3}]} 
          resizeMode="contain"   
        />
        <CustomInput 
          name="email" 
          placeholder="Email" 
          control={control} 
          rules={{required: 'Email requerido' }} 
        />
        <StartButton onPress={handleSubmit(onSendPressed)} text="Enviar"/>
        <StartButton onPress={onSignInPressed} text="Volver a inicio" bgColor="#D43E3E" fgColor="white"/>
        
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
  },
  logo: {
    width: '50%',
    height: '50%',
    maxWidth: 300,
    marginBottom: 20,
  }
})

export default ForgotPasswordScreen