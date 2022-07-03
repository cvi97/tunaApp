import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import SongItem from './SongItem'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation, useFocusEffect} from '@react-navigation/native'

const SongList = (props) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('')
  const [filterdData, setFilterdData] = useState(props.songs)
  const [masterData, setMasterData] = useState(props.songs)
  const [refreshing, setRefreshing] = useState(false);
  
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = setMasterData(props.songs);

      return () => unsubscribe;
    }, [props])
  );

  useEffect(() => {
    setFilterdData(masterData)
  }
  , [masterData])

  const onRefresh = () => {
    setRefreshing(true);
    setMasterData(props.songs)
    setRefreshing(false);
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = `${item.Name.toUpperCase()} ${item.Author.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterdData(newData);
      setSearch(text);
    } else {
      setFilterdData(masterData);
      setSearch('');
    }
  }


  const renderItem = ({ item }) => {
    return <SongItem song={item} />
  }
  
  return (
    <>
      <TextInput
        style={styles.TextInput}
        placeholder="Buscar canción"
        value={search}
        onChangeText={(text) => searchFilter(text)}
      />
    
      <FlatList
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {renderItem}
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={false}
            />
          }
      />
    </>
  )
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    paddingLeft: 20,
    backgroundColor: '#FCF3CF',
  }
})

export default SongList