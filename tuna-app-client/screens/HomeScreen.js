import { View, Text } from 'react-native'
import React, {useEffect} from 'react'

const HomeScreen = () => {

  useEffect(() => {
    console.log('HomeScreen rendered')
  } , [])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen