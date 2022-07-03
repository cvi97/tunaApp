import AsyncStorage from '@react-native-async-storage/async-storage';

const API = "http://10.0.2.2:3000";
//const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjE1LCJ0dW5hSUQiOjEsInJvbGUiOiJ0dW5vIiwiaWF0IjoxNjU2NjcyNzY5LCJleHAiOjE2NTcyMTI3Njl9.f4BgatzSCqfGIieSo-s6gs2EUQ2Tv_xP4Zfp3WZDjC8'



export const logIn = async (data) => {
    const res = await fetch(`${API}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await res.json()
}
            

export const getSongs = async () => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/tunas/songs/getall', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        });
    return await res.json()
}

export const saveSong = async (data) => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/tunas/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        },
        body: JSON.stringify(data)
    });
    return await res.json()
}

export const getEvents = async () => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/events', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        });
    return await res.json();
}

export const getEvent = async (eventid) => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/events/' + eventid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        });
    return await res.json();
}

export const saveEvent = async (event) => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        },
        body: JSON.stringify(event)
    });
    return await res.json();
}

export const deleteEvent = async (eventid) => {
    console.log(eventid);
    const res = await fetch(API + '/events/' + eventid, {
        method: 'DELETE'
    });
    return await res.json();
}

export const getUsersByTuna = async () => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/tunas/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        });
    return await res.json();
}

export const confirmUser = async (userid) => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/users/confirm' + userid, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
        });
    return await res.json();
}

export const getParticipants = async (eventid) => {
    const res = await fetch(API + '/events/' + eventid + '/participants');
    return await res.json();
}

export const changePaidFromEvent = async (eventid, userid, paid) => {
    const res = await fetch(API + '/event/setPaid', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            'paid': paid,
            'eventid': eventid,
            'userid': userid
        }
    });
    return await res.json();
}

export const addParticipant = async (eventid) => {
    const TOKEN = await AsyncStorage.getItem('@token');
    const res = await fetch(API + '/events/' + eventid + '/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
    });
    return await res.json();
}