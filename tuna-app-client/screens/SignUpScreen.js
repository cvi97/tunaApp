import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import StartButton from '../components/StartButton'

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [mote, setMote] = useState('')
  const [password, setPassword] = useState('')
  const [tunaCode, setTunaCode] = useState('')

  //const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onRegisterPressed = () => {
    console.log(email, password)
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }

  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <Text style={styles.text}>Email:</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <Text style={styles.text}>Tu nombre:</Text>
        <CustomInput placeholder="Nombre" value={name} setValue={setName} />
        <Text style={styles.text}>¿Cómo te llaman en la tuna?</Text>
        <CustomInput placeholder="Mote" value={mote} setValue={setMote} />
        <Text style={styles.text}>Elige una contraseña</Text>
        <CustomInput placeholder="Contraseña" value={password} setValue={setPassword} secureTextEntry />
        <Text style={styles.text}>Código de tu tuna:</Text>
        <CustomInput placeholder="Código de tu Tuna" value={tunaCode} setValue={setTunaCode} />
        <StartButton onPress={onRegisterPressed} text="Registrarse"/>
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
    marginTop: 40,
  },
  text : {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 40,
    
  }
})

export default SignUp 