import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../../assets/digitaltuna-logo.jpg'
import LogoTitle from '../../assets/digitaltuna-name.png'
import CustomInput from '../../components/CustomInput'
import StartButton from '../../components/StartButton'
//import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = ({navigation, route}) => {

  const {height} = useWindowDimensions();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onSendPressed= (data) => {
    navigation.navigate("ResetPassword")
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
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
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
  },
  logoTitle: {
    width: '100%',
    alignSelf: 'center',
  }
})

export default ForgotPasswordScreen