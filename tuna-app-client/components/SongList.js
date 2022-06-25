import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import SongItem from './SongItem'

const SongList = (props) => {

  const renderItem = ({ item }) => {
    return <SongItem song={item} />
  }
  

  return (
    <FlatList
        data={props.songs}
        keyExtractor={(item) => item.SongID.toString()}
        renderItem = {renderItem}
    />
  )
}

export default SongList