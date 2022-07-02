import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Layout from '../components/Layout'
import UsersList from '../components/UsersList'

const UsersListScreen = () => {
  const navigation = useNavigation()
  return (
    <Layout>
      <UsersList navigation={navigation}/>
    </Layout>
  )
}

export default UsersListScreen