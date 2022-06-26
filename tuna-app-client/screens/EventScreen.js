import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import Layout from '../components/Layout'
import { getEvent } from '../api'

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const [Event, setEvent] = useState({});
  navigation.setOptions({ headerTitle: Event.Name });
  const loadEvent = async () => {
    const data = await getEvent(route.params.eventid);
    setEvent({Name: data.Name, Description: data.Description});
  }

  useEffect(() => {
    loadEvent()
  } , [])

  return (
    <Layout>
      <View>
        <Text>{Event.Name}</Text>
        <Text>{Event.Description}</Text>
      </View>
    </Layout>
  )
}

export default EventScreen