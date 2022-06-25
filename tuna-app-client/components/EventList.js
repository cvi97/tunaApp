import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import EventItem from './EventItem'

const EventList = (props) => {

  const renderItem = ({ item }) => {
    return <EventItem Event={item} />
  }
  

  return (
    <FlatList
        data={props.Events}
        keyExtractor={(item) => item.EventID.toString()}
        renderItem = {renderItem}
    />
  )
}

export default EventList