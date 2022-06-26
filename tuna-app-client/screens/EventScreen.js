import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

const EventScreen = () => {
  const route = useRoute()
	console.log(route.params)
  return (
    <View>
      <Text>EventScreen</Text>
    </View>
  )
}

export default EventScreen