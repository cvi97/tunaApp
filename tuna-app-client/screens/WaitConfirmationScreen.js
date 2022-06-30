import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import Logo from '../assets/logo-tuna.jpg'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'
//import { useNavigation } from '@react-navigation/native';

const WaitConfirmationScreen = ({navigation, route}) => {

  const {height} = useWindowDimensions();

  const onSignInPressed = (data) => {
    navigation.navigate("SignIn")
  }

  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.1}]} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.text}> Hemos mandado un mensaje al administrador de tu tuna para que confirme tu identidad. </Text>
          <Text style={styles.text}> Serás avisado cuando puedas entrar. Gracias por tu paciencia </Text>
        </View>
        <StartButton onPress={onSignInPressed} text="Inicio de Sesión" type="PRIMARY"/>
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
  },
  textContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#F1DCB2',
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    lineHeight: 28,
    letterSpacing: 1,
    color: 'black',
    textAlign: 'center',
  }
})

export default WaitConfirmationScreen