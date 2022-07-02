import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SongItem = ({song}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SongScreen', {song: song})}>
        <Text style={styles.text}>{song.Name} - Autor: {song.Author}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffecd7',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 17,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 12,
    }
});

export default SongItem