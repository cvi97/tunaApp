import { connect } from "../database";


export const getEventsFromTuna = async (req, res) => {
    console.log(req.user)
    const connection = await connect();
    const tunaId = req.tunaid;
    const [rows] = await connection.query("SELECT * FROM Events WHERE Tuna = ?;", [tunaId]);
    connection.end();
    res.json(rows);
}

export const getEvent = async (req, res) => {
    const connection = await connect();
    const eventid = req.params.eventid;
    const tunaid = req.params.tunaid;
    const [rows] = await connection.query("SELECT * FROM Events WHERE Tuna = ? AND EventID = ?;", [tunaid, eventid]);
    connection.end();
    res.json(rows[0]);
}


export const getEventUsers = async (req, res) => {
    const connection = await connect();
    const eventid = req.params.eventid; 
    const tunaid = req.params.tunaid;
    const [rows] = await connection.query("SELECT U.Mote FROM UserEvent UE INNER JOIN Users U ON UE.Event = ? AND UE.User=U.UserID;", [eventid]);	
    connection.end();
    res.json(rows);
}


export const saveEvent = async (req, res) => {
    const tunaid = req.tunaid;
    const name = req.body.name;
    const description = req.body.description;
    const creator = req.body.creator;
    const date = req.body.date;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Events (Name, Description, Creator, Tuna, Date) VALUES (?, ?, ?, ?, ?);", [name, description, creator, tunaid, date]);
    connection.end();
    res.send(results);
}

//saves the user that is attending the event
export const saveUserIntoEvent = async (req, res) => {
    const user = req.userID;
    const eventid = req.body.eventid;
    const connection = await connect();
    const results = await connection.query("INSERT INTO UserEvent (User, EventID) VALUES (?, ?);", [user, eventid]);
    connection.end();
    res.send(results);
}

export const deleteEvent = async (req, res) => {
    const eventid = req.params.eventid;
    const connection = await connect();
    const results = await connection.query("DELETE FROM Events WHERE EventID = ?;", [eventid]);
    connection.end();
    res.send(results);
}
