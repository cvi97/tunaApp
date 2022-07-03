import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'
import LineItem from '../components/LineItem'
//var ChordProParser = require("chordproject-parser");


const SongScreen = ({route}) => {
  const [song, setSong] = useState(route.params.song)
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: song.Name + ' - ' + song.Author });

  const lines = song.Lyrics.split('\n');
  
  const renderItem = ({ item }) => {
    return <LineItem line={item} />
  }
  return (
    <Layout>
      <FlatList
        data={lines}
        keyExtractor={(item) => item}
        renderItem = {renderItem}
      />
    </Layout>
  )
}

export default SongScreen