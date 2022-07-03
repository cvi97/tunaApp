import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
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
        style={{ marginTop: 10, marginLeft: 10 }}
        data={lines}
        keyExtractor={(item) => item}
        renderItem = {renderItem}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => console.log('delete')}
        >
          <Text style={styles.textButton}>Borrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => console.log('edit')}
        >
          <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  deleteButton: {
    width: "40%",
    marginLeft: 20,
    backgroundColor: '#BB1616',
    borderRadius: 7,
    paddingVertical: 4,
    margin: 10,
    alignContent: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 17,
    paddingBottom: 8,
    paddingTop: 8,
    textAlign: 'center'
  }
})

export default SongScreen