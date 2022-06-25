import { View, StyleSheet } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3D69D',
        padding: 20,
        justifyContent: 'center'
    }, 
});
export default Layout