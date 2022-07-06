import { View, Text, StyleSheet  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown'

const UserItem = ({userReceived, handleConfirm}) => {
  const [user, setUser] = useState(0);
  const refreshUser = () => {
    AsyncStorage.getItem('@user') .then(user => {
      setUser(JSON.parse(user));
    }) .catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    refreshUser();
    //userReceived.isConfirmed || handleConfirm(userReceived.UserID);
  } , [])

  const navigation = useNavigation();
  const roles = ["Tuno", "Novato", "Admnistrador"];

  var containerStyle;
  {
    (userReceived.isConfirmed) ? containerStyle = styles.isConfirmed : containerStyle = styles.notConfirmed;
  }

  if((userReceived.isConfirmed) == false && (user.role == "adminTuna")){
    return (
      <View style={[containerStyle,styles.container]}>
        <View >
            <Text style={styles.text}>{userReceived.Name}</Text>
            <Text style={styles.text}>{userReceived.Mote}</Text>
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => handleConfirm(userReceived.UserID)}
        >
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    )
  }
    else{
      return (
        <View style={[containerStyle,styles.container]}>
          <TouchableOpacity >
            <Text style={styles.text}>{userReceived.Mote} </Text>
            <Text style={styles.text}>{userReceived.Name}     Rol: {userReceived.Role}</Text>
            {user.role == "adminTuna" && <SelectDropdown
              data={roles}
              defaultButtonText={userReceived.Role}
              buttonStyle={styles.dropdown}
              dropdownStyle={styles.dropdownSelector}
              buttonTextStyle={{fontWeight: 'bold'}}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />}
          </TouchableOpacity>
        </View>
      )
    }
}

// all containers are styled with the same style but the color is different depending on the date
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    isConfirmed: {
      backgroundColor: '#ffecd7'      
    },
    notConfirmed: {
        backgroundColor: '#D2C1AE'
    },
    text: {
        color: 'black',
        fontSize: 17,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 12,
    },
    confirmButton: {
        backgroundColor: 'grey',
        borderRadius: 7,
        padding: 4,
        margin: 10,
        alignContent: 'center'
    },
    dropdown: {
        backgroundColor: '#BB1616',
        borderRadius: 7,
        padding: 4,
        margin: 10,
        alignContent: 'center',
        height: 30,
        width: '100%'
    },
    dropdownSelector: {
        backgroundColor: '#BB1616',
        borderRadius: 7,
        padding: 4,
        margin: 10,
        alignContent: 'center',
        borderWidth: 3,
    }

});

export default UserItem