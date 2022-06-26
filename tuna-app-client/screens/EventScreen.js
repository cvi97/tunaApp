import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import Layout from '../components/Layout'
import { getEvent } from '../api'

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  const eventid = route.params.eventid;
  const [Event, setEvent] = useState([]);

  const loadEvent = async () => {
    const data = await getEvent(eventid);
    setEvent({Name: data.Name, Description: data.Description});
  }

  useEffect(() => {
    loadEvent()
    //navigation.setOptions({ headerTitle: Event.Name });
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