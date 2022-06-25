import { View, StyleSheet } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF3CF',
        borderTopWidth: 2,
        borderTopColor: 'black'
    }, 
});
export default Layout