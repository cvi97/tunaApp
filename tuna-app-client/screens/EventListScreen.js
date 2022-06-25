import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getEvents } from '../api'

import Layout from '../components/Layout'
import EventList from '../components/EventList'

import NewButton from '../components/NewButton'

const EventListScreen = ({navigation}) => {

  const [Events, setEvents] = useState([])

  const loadEvents = async () => {
    const data = await getEvents(1);
    setEvents(data);
  }

  useEffect(() => {
    loadEvents() 
  } , [])

  return (
    <Layout>
      <EventList Events={Events} />
      <NewButton navigation={navigation} type="event"/>
    </Layout>
    
  );
}

export default EventListScreen