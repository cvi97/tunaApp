import { View, Text, FlatList, Dimensions, RefreshControl } from 'react-native'
import React,  {useEffect, useState} from 'react'

import EventItem from './EventItem'
import { getEvents, deleteEvent } from '../api'

const EventList = () => {

  const [Events, setEvents] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const loadEvents = async () => {
    const data = await getEvents(1);
    setEvents(data);
  }

  useEffect(() => {
    loadEvents() 
  } , [])

  const handleDelete = async (eventid) => {
    await deleteEvent(eventid);
    loadEvents();
  }

  // load Events from API when screen is refreshed
  const onRefresh = () => {
    setRefreshing(true);
    loadEvents().then(() => setRefreshing(false));
  }

  const renderItem = ({ item }) => {
    return <EventItem Event={item} handleDelete={handleDelete}/>
  }
  
  return (
    <FlatList
        data={Events}
        keyExtractor={(item) => item.EventID.toString()}
        renderItem = {renderItem}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={false}
          />
        }
    />
  )
}

export default EventList