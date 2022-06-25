import React, {useEffect} from 'react'
import { View, Text } from 'react-native'


const EventListScreen = () => {

  useEffect(() => {
    console.log('EventList rendered')
  } , [])

  return (
    <View>
      <Text>"EventListScreen"</Text>
    </View>
  );
};

export default EventListScreen