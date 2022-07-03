import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import { getSongs } from '../api'
import Layout from '../components/Layout'
import SongList from '../components/SongList'

const SongListScreen = () => {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([])

  const loadSongs = async () => {
    const data = await getSongs();
    setSongs(data);
  }

  useEffect(() => {
    const whenFocus = navigation.addListener('focus', () => {
      loadSongs()
    });
    return whenFocus;
  } , [navigation])

  return (
    <Layout>
      <SongList songs={songs} />
    </Layout>
  );
}

export default SongListScreen