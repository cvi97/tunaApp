import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../assets/logo-tuna.jpg'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'
//import { useNavigation } from '@react-navigation/native';

const SignInScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.log(email, password)
  }
  const onForgotPasswordPressed = () => {
    console.log('Forgot password')
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
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Contraseña" value={password} setValue={setPassword} secureTextEntry />
        <StartButton onPress={onSignInPressed} text="Entrar"/>
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