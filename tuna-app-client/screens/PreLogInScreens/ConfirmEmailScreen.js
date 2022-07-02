import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import StartButton from '../../components/StartButton'

const ConfirmEmailScreen = ({navigation}) => {
  const [code, setCode] = useState('');


  const onEnterPressed = () => {
    navigation.navigate("SignIn")
  }
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  }  
  const onResendPressed = () => {
    navigation.navigate("SignIn")
  }
  //Everything inside the ScrollView is scrollable so if the phone is small all the buttons are reachable
  return (
    <ScrollView style={{backgroundColor:'#F3D69D'}}>
      <View style={styles.root}>
        <Text style={styles.text}>Código en tu correo:</Text>
        <CustomInput placeholder="Código" value={code} setValue={setCode} />
        
        <StartButton onPress={onEnterPressed} text="Listo"/>
        <StartButton onPress={onResendPressed} text="Reenviar código" bgColor="#D43E3E" fgColor="white"/>
        <StartButton onPress={onSignInPressed} text="Volver a Iniciar Sesión" type="TERTIARY"/>
        
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
    marginTop: 120,
  },
  text : {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 40,
    
  }
})

export default ConfirmEmailScreen 