import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'

const SongScreen = ({route}) => {
  const [song, setSong] = useState(route.params.song)
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: song.Name + ' - ' + song.Author });

  return (
    <Layout>
      <Text>{song.Lyrics}</Text>
    </Layout>
  )
}

export default SongScreen