import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../assets/logo-tuna.jpg'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import { logIn } from '../api';
//import { useNavigation } from '@react-navigation/native';

const SignInScreen = ({navigation, route}) => {
  //const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSignInPressed = async (data) => {
    const response = await logIn(data)
    if(response.error) {
      Alert.alert('Error', 'Usuario y contraseña no se corresponden a ninguna cuenta registrada')
    }
    else {
      navigation.navigate('EventList')
    }
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
        <CustomInput 
          name="password" 
          placeholder="Contraseña" 
          control={control} 
          secureTextEntry 
          rules={{required: 'Contraseña requerida'}}
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
  },
  logo: {
    width: '50%',
    height: '50%',
    maxWidth: 300,
    marginBottom: 20,
  }
})

export default SignInScreen