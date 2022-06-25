const API = "http://10.0.2.2:3000"

export const getSongs = async (tunaid) => {
    const res = await fetch(API + '/tunas/ ' + tunaid + '/songs');
    return await res.json();
}

export const getEvents = async (tunaid) => {
    const res = await fetch(API + '/tunas/ ' + tunaid + '/events');
    return await res.json();
}
