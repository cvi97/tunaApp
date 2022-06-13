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

export const getTunasCount = (req, res) => {
    res.send('Tunas Count!');
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