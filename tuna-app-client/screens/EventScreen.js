import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import Layout from '../components/Layout'
import { getEvent, getParticipants } from '../api'
import { ScrollView } from 'react-native-gesture-handler'
import ParticipantItem from '../components/ParticipantItem'
import { addParticipant } from '../api'

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [Participants, setParticipants] = useState(1)
  const [Event, setEvent] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const loadParticipants = async (eventid) => {
    const data = await getParticipants(eventid);
    setParticipants(data);
  }

  useEffect(() => {
    loadParticipants(route.params.eventid);
  } , [])


  navigation.setOptions({ headerTitle: Event.Name });
  const loadEvent = async () => {
    const data = await getEvent(route.params.eventid);
    setEvent({Name: data.Name, Description: data.Description, EventID: data.EventID, Date: data.Date, Creator: data.Creator});
  }

  useEffect(() => {
    loadEvent()
  } , [])

  const handleJoin = async (eventid) => {
    console.log(eventid)
    await addParticipant(eventid);
    loadParticipants(eventid);
  }

  const renderItem = ({ item }) => {
    return <ParticipantItem Participant={item}/>
  }
  return (
    <Layout>
        <TouchableOpacity 
          style={styles.joinButton}
          onPress={() => handleJoin(Event.EventID, )}
        >
          <Text style={styles.buttonText}>Unirse</Text>
        </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <Text style={styles.head}>Descripción:  </Text>
        <Text style={styles.text}>{Event.Description}</Text>
      </View>
      <FlatList
        data={Participants}
        keyExtractor={(item) => item.User}
        renderItem = {renderItem}
      />

    </Layout>
  )
}

const styles = StyleSheet.create({
  head: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 8,
  },
  joinButton: {
    backgroundColor: '#BB1616',
    borderRadius: 7,
    padding: 7,
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: "white",
		fontWeight: "bold",
    alignSelf: "center"
  },
  descriptionContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#F1DCB2',
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    lineHeight: 28,
    letterSpacing: 1,
    color: 'black',
  }
})

export default EventScreen