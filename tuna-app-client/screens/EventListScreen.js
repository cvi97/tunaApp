import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getEvents } from '../api'

import Layout from '../components/Layout'
import EventList from '../components/EventList'

const EventListScreen = () => {

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
    </Layout>
  );
}

export default EventListScreen