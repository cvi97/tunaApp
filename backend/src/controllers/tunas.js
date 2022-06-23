import { connect } from '../database';

export const getTunas = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Tunas;");
    connection.end();
    res.json(rows);
}


// Gets tuna by id
export const getTuna = async (req, res) => {
    const tunaID = req.params.id;
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Tunas WHERE TunaID = ?;", [tunaID]);
    connection.end();
    res.json(rows[0]);
}

export const getNumerOfUsers = async (req, res) => {
    const tunaId = req.params.tunaid;
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) AS count FROM Users WHERE Tuna = ?;", [tunaId]);
    connection.end();
    res.json(rows[0]);
}

export const saveTuna = async (req, res) => {
    const name = req.body.name;
    const ShortName = req.body.ShortName;
    const connection = await connect();
    const results = await connection.query("INSERT INTO Tunas (Name, ShortName) VALUES (?, ?);", [name, ShortName]);
    connection.end();
    res.send(results);
}

export const deleteTuna = async (req, res) => {
    const tunaID = req.params.id;
    const connection = await connect();
    const results = await connection.query("DELETE FROM Tunas WHERE TunaID = ?;", [tunaID]);
    connection.end();
    res.send(results);
}

export const deleteAllTunas = async (req, res) => {
    const connection = await connect();
    const results = await connection.query("DELETE FROM Tunas;");
    connection.end();
    res.send(results);
}

export const getUsersTuna = async (req, res) => {
    const tunaID = req.params.id;
    const connection = await connect();
    const [rows] = await connection.query("SELECT *, 'No mostrar' as Password FROM Users WHERE Tuna = ?;", [tunaID]);
    connection.end();
    res.json(rows);
}