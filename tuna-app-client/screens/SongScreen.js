import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'

const SongScreen = ({route}) => {
  const [song, setSong] = useState(route.params.song)

  return (
    <Layout>
      <Text>{song.Name}</Text>
    </Layout>
  )
}

export default SongScreen