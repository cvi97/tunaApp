import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getSongs } from '../api'

import Layout from '../components/Layout'
import SongList from '../components/SongList'

const SongListScreen = () => {

  const [songs, setSongs] = useState([])

  const loadSongs = async () => {
    const data = await getSongs();
    setSongs(data);
  }

  useEffect(() => {
    loadSongs() 
  } , [])

  return (
    <Layout>
      <SongList songs={songs} />
    </Layout>
  );
}

export default SongListScreen