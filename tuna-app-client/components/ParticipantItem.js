import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const ParticipantItem = ({Participant}) => {
	const [paid, setPaid] = useState(Participant.Paid);

	if(Participant.Paid === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{Participant.Name} - {Participant.Mote}</Text>
				<TouchableOpacity 
					style={styles.paidButton}
        			>
          			<Text>Confirmar pago</Text>
        		</TouchableOpacity>
			</View>
  	)
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{Participant.Name} - {Participant.Mote}</Text>
				<Text style={styles.text}>Pagado</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
			borderBottomWidth: 1,
			borderColor: 'black',
			flexDirection: 'row',
			justifyContent: 'space-between',
	},
	text: {
			color: 'black',
			fontSize: 17,
			paddingBottom: 8,
			paddingTop: 8,
			paddingLeft: 12,
	},
	paidButton: {
			backgroundColor: 'grey',
	}
})

export default ParticipantItem