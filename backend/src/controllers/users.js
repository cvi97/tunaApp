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
    const tuna = req.body.Tuna;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Users (Name, Email, Tuna) VALUES (?, ?, ?);", [name, email, tuna]);
    connection.end();
    res.send(results);
}