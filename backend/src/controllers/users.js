import { connect } from "../database";

export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT *, 'No Mostrar' AS Password FROM Users;");
    connection.end();
    res.json(rows);
}

export const getUser = async (req, res) => {
    const connection = await connect();
    const userdid = req.params.userid;
    const [rows] = await connection.query("SELECT *, 'No Mostrar' AS Password FROM Users WHERE UserID = ?;", [userdid]);
    connection.end();
    res.json(rows);
}

export const getUserPassword = async (req, res) => {
    const connection = await connect();
    const userdid = req.params.userid;
    const [rows] = await connection.query("SELECT CAST(AES_DECRYPT(Password, 'secret') as CHAR(50)) Password FROM Users WHERE UserID = ?;", [userdid]);
    connection.end();
    res.json(rows[0]);
}

export const saveUser = async (req, res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    const tuna = req.params.tunaid;
    const mote = req.body.Mote;
    const password = req.body.Password;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Users (Name, Mote, Email, Tuna, Password) VALUES (?, ?, ?, ?, ?);", [name, mote, email, tuna, password]);
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

export const updateUserPassword = async (req, res) => {
    const userid = req.params.userid;
    const password = req.body.Password;
    const connection = await connect();
    const results = await connection.query("UPDATE Users SET Password = (AES_ENCRYPT(?, 'secret')) WHERE UserID = ?;", [password, userid]);
    connection.end();
    res.send(results);
}

export const updateUserRole = async (req, res) => {
    const userid = req.params.userid;
    const role = req.body.Role;
    const connection = await connect();
    const results = await connection.query("UPDATE Users SET Role = ? WHERE UserID = ?;", [role, userid]);
    connection.end();
    res.send(results);
}

export const deleteUser = async (req, res) => {
    const userid = req.params.userid;
    const connection = await connect();
    const results = await connection.query("DELETE FROM Users WHERE UserID = ?;", [userid]);
    connection.end();
    res.send(results);
}