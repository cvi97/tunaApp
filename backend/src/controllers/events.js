import { connect } from "../database";


export const getEventsFromTuna = async (req, res) => {
    const connection = await connect();
    const tunaId = req.tunaid;
    const [rows] = await connection.query("SELECT * FROM Events WHERE Tuna = ?;", [tunaId]);
    connection.end();
    res.json(rows);
}

export const getEvent = async (req, res) => {
    const connection = await connect();
    const eventid = req.params.eventid;
    const [rows] = await connection.query("SELECT * FROM Events WHERE EventID = ?;", [eventid]);
    connection.end();
    res.json(rows[0]);
}


export const getEventUsers = async (req, res) => {
    const connection = await connect();
    const eventid = req.params.eventid; 
    const [rows] = await connection.query("SELECT *, 'No Mostrar' AS Password FROM UserEvent UE INNER JOIN Users U ON UE.Event = ? AND UE.User=U.UserID;", [eventid]);	
    connection.end();
    res.json(rows);
}


export const saveEvent = async (req, res) => {
    const tunaid = req.tunaid;
    const name = req.body.name;
    const description = req.body.description;
    const creator = req.user;
    const date = req.body.date;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Events (Name, Description, Creator, Tuna, Date) VALUES (?, ?, ?, ?, ?);", [name, description, creator, tunaid, date]);
    const results2 = await connection.query("INSERT INTO `bsu5ekft4qhzb6cxmzm1`.`UserEvent` (`User`, `Event`, `Paid`) VALUES (?, ?, 0);", [creator, results[0].insertId]);
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

export const changePaidFromEvent = async (req, res) => {
    const eventid = req.body.eventid;
    const user = req.body.userid;
    const paid = req.body.paid;
    const connection = await connect();
    const results = await connection.query("UPDATE UserEvent SET Paid = ? WHERE User = ? AND Event = ?;", [paid, user, eventid]);
    connection.end();
    res.send(results);
}


export const addParticipantToEvent = async (req, res) => {
    const eventid = req.params.eventid;
    const user = req.user;
    const connection = await connect();
    const results = await connection.query("INSERT IGNORE INTO UserEvent (User, Event, Paid) VALUES (?, ?, 0);", [user, eventid]);
    connection.end();
    res.send(results);
}
