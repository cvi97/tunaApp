import { View, Text, FlatList, Dimensions, RefreshControl } from 'react-native'
import React,  {useEffect, useState} from 'react'

import UserItem from './UserItem'
import { getUsersByTuna, confirmUser } from '../api'


const UsersList = ({navigation}) => {

  const [Users, setUsers] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const loadUsers = async () => {
    const data = await getUsersByTuna();
    setUsers(data);
  }

  useEffect(() => {
    const whenFocus = navigation.addListener('focus', () => {
      loadUsers()
    });
     return whenFocus;
  } , [navigation])

  const handleConfirm = async (userid) => {
    console.log("confirming user: " + userid)
    await confirmUser(userid);
    loadUsers();
  }

  // load Users from API when screen is refreshed
  const onRefresh = () => {
    setRefreshing(true);
    loadUsers().then(() => setRefreshing(false));
  }

  const renderItem = ({ item }) => {
    return <UserItem userReceived={item} handleConfirm={handleConfirm}/>
  }
  
  return (
    <FlatList
        data={Users}
        keyExtractor={(item) => item.UserID.toString()}
        renderItem = {renderItem}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={false}
          />
        }
    />
  )
}

export default UsersList