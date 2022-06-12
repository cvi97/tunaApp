import { connect } from '../database';

export const getTunas = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Tuna;");
    res.json(rows);
}

export const getTuna = (req, res) => {
    res.send('Una tuna!');
}

export const getTunasCount = (req, res) => {
    res.send('Tunas Count!');
}

export const saveTuna = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Tuna (Nombre) VALUES ('TDA');");
    console.log(rows);
    res.send('Save Tuna!');
}

export const deleteTuna = (req, res) => {
    res.send('Delete Tuna!');
}