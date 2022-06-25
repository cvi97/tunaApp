import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const SongItem = ({song}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{song.Name} - Autor: {song.Author}</Text>
    </View>
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