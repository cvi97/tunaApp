const API = "http://10.0.2.2:3000"

export const getSongs = async (tunaid) => {
    const res = await fetch(API + '/tunas/ ' + tunaid + '/songs');
    return await res.json();
}

export const getEvents = async (tunaid) => {
    const res = await fetch(API + '/tunas/ ' + tunaid + '/events');
    return await res.json();
}

export const getEvent = async (eventid) => {
    const res = await fetch(API + '/tunas/1/events/' + eventid);
    return await res.json();
}

export const saveEvent = async (event) => {
    const res = await fetch(API + '/tunas/1/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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