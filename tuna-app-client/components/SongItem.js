import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const SongItem = ({song}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{song.Name} - Autor: {song.Author}</Text>
        <Text style={styles.text}>Autor: {song.Author}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5DFB4',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 17
    }
});

export default SongItem