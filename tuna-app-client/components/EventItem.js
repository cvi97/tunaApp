import { View, Text, StyleSheet  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const EventItem = ({Event}) => {
  var date = Event.Date;
  var dateInDateFormat = new Date(date);
  if (date != null) {
    date = date.slice(0,10);
  }

  // if date of event is older than today then the color of the container is grey, else it is cream
  const today = new Date();
  var containerStyle;
  {
    (dateInDateFormat > today) ? containerStyle = styles.containerFutureEvent : containerStyle = styles.containerPastEvent;
  }
  return (
  <TouchableOpacity>
    <View style={[containerStyle,styles.container]}>
    <TouchableOpacity>
        <Text style={styles.text}>{Event.Name}</Text>
        <Text style={styles.text}>{date}</Text>
    </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Borrar</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
  )
}

// all containers are styled with the same style but the color is different depending on the date
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerFutureEvent: {
        backgroundColor: '#ffecd7'      
    },
    containerPastEvent: {
        backgroundColor: '#D2C1AE'
    },
    text: {
        color: 'black',
        fontSize: 17,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 12,
    }
});

export default EventItem