const API = "http://10.0.2.2:3000"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjE1LCJ0dW5hSUQiOjEsInJvbGUiOiJ0dW5vIiwiaWF0IjoxNjU2NjcyNzY5LCJleHAiOjE2NTcyMTI3Njl9.f4BgatzSCqfGIieSo-s6gs2EUQ2Tv_xP4Zfp3WZDjC8'


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
            

export const getSongs = async (tunaid) => {
    const res = await fetch(API + '/tunas/ ' + tunaid + '/songs');
    return await res.json();
}

export const getEvents = async (tunaid) => {
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
    const res = await fetch(API + '/tunas/1/events/' + eventid);
    return await res.json();
}

export const saveEvent = async (event) => {
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