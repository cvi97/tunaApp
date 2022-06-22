import { connect } from "../database";

export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Users;");
    connection.end();
    res.json(rows);
}

export const saveUser = async (req, res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    const tuna = req.params.tunaid;
    const mote = req.body.Mote;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Users (Name, Mote, Email, Tuna) VALUES (?, ?, ?, ?);", [name, mote, email, tuna]);
    connection.end();
    res.send(results);
}

export const updateUserMote = async (req, res) => {
    const userid = req.params.userid;
    const mote = req.body.Mote;
    const connection = await connect();
    const results = await connection.query("UPDATE Users SET Mote = ? WHERE UserID = ?;", [mote, userid]);
    connection.end();
    res.send(results);
}