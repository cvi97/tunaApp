import { connect } from "../database";
import { config as dotenv } from "dotenv";


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv();

export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT *, 'No Mostrar' AS Password FROM Users;");
    connection.end();
    res.json(rows);
}

export const getUserById = async (req, res) => {
    const connection = await connect();
    const userdid = req.params.userid;
    const [rows] = await connection.query("SELECT *, 'No Mostrar' AS Password FROM Users WHERE UserID = ?;", [userdid]);
    connection.end();
    res.json(rows[0]);
}

export const getUserPassword = async (req, res) => {
    const connection = await connect();
    const userdid = req.params.userid;
    const sal = req.body.sal;
    const [rows] = await connection.query("SELECT CAST(AES_DECRYPT(Password, ?) as CHAR(50)) Password FROM Users WHERE UserID = ?;", [sal, userdid]);
    connection.end();
    res.json(rows[0]);
}

export const saveUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const tuna = req.body.tunaid;
    const mote = req.body.mote;
    const password = req.body.password;
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(UserID) FROM Users WHERE Email = ?;", [email]);
    connection.end();
    if (rows[0]['COUNT(UserID)'] <= 0) {
        bcrypt.hash(password, 10, async function(err, hash) {
            if(err) {
                res.status(500).json({
                    error: 'No se ha podido encriptar la contraseña'
                });
            }
            else {
                const connection = await connect();
                const [rows1] = await connection.query("INSERT INTO Users (Name, Email, Password, Mote, Tuna) VALUES (?, ?, ?, ?, ?)", [name, email, hash, mote, tuna]);
                connection.end();
                res.json({
                    message: 'Usuario creado'
                });
            }
        });
    }
    else {
        res.status(500).json({
            error: 'El email ya existe'
        });
    }
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


export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Users WHERE Email = ?;", [email]);
    connection.end();
    if(rows.length > 0) {
        // Check if password is correct
        bcrypt.compare(password, rows[0].Password, function(err, result) {  
            if(err) {
                res.status(500).json({
                    error: 'Error al verificar las contraseñas'
        });
            }
            else {
                if(result) {
                    // Create JWT Payload - Contains User Data 
                    jwt.sign({ userID: rows[0].UserID, tunaID: rows[0].Tuna, role: rows[0].Role }, process.env.JWT_SECRET, { expiresIn: '150h' }, (err, token) => {
                        if(err) {
                            res.status(500).json({
                                error: 'Error al generar el token'
                        });
                        }
                        else {
                            res.json({
                                message: 'Login correcto',
                                token: token
                            });
                        }
                    });
                }
                else {
                    res.status(401).json({
                        error: 'Contraseña incorrecta'
                    });
                }
            }
        });
    }
    else {
        res.status(401).json({
            error: 'Usuario no encontrado'
        });
    }
}
