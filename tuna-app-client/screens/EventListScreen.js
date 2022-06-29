import { View, Text, TouchableOpacity } from 'react-native'



import Layout from '../components/Layout'
import EventList from '../components/EventList'

import NewButton from '../components/NewButton'

const EventListScreen = ({navigation}) => {
  return (
    <Layout>
      <EventList navigation={navigation}/>
      <NewButton navigation={navigation} type="event"/>
    </Layout>
    
  );
}

export default EventListScreen