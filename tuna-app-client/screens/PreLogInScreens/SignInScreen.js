import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../../assets/digitaltuna-logo.jpg'
import LogoTitle from '../../assets/digitaltuna-name.png'
import CustomInput from '../../components/CustomInput'
import StartButton from '../../components/StartButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logIn } from '../../api';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = ({ route, refreshToken}) => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSignInPressed = async (data) => {
    const response = await logIn(data)
    if((response.error == "Contraseña incorrecta") || (response.error == "Usuario no encontrado")) {
      Alert.alert('Error', 'Usuario y contraseña no se corresponden a ninguna cuenta registrada')
    }
    else if(response.error == "Usuario no confirmado") {
      navigation.navigate("WaitConfirmation")
    }
    else {
      try {
        await AsyncStorage.setItem('@token', response.token)
        await AsyncStorage.setItem('@user', JSON.stringify(response.user))
        refreshToken();
      } catch (e) {
        console.log(e)
      }
      //console.log(await AsyncStorage.getItem('@token'))
      //isLoggedIn = true;
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
      <Image
        source={Logo}
        style={[styles.logo]}
        resizeMode="contain"
      />
      <Image
        source={LogoTitle}
        style={[styles.logoTitle]}
        resizeMode="contain"
      />
      <View style={styles.root}>
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
  logoContainer: {
  },
  logo: {
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
  },
  logoTitle: {
    width: '100%',
    alignSelf: 'center',
  }
})

export default SignInScreen