import { connect } from '../database';

// All song from a tuna
export const getSongsTuna = async (req, res) => {
    const tunaID = req.params.tunaid;
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Song WHERE Tuna = ?;", [tunaID]);
    connection.end();
    res.json(rows);
}

// One song from a tuna
export const getSongTuna = async (req, res) => {
    const tunaID = req.params.tunaid;
    const songID = req.params.songid;
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM Song WHERE Tuna = ? AND SongID = ?;", [tunaID, songID]);
    connection.end();
    res.json(rows);
}

export const saveSongsTuna = async (req, res) => {
    const name = req.body.name;
    const tunaID = req.params.tunaid;
    
    const connection = await connect();
    const results = await connection.query("INSERT INTO Song (Name, Tuna) VALUES (?, ?);", [name, tunaID]);
    connection.end();
    res.send(results);
}

export const changeLyricsSong = async (req, res) => {
    const songID = req.params.songid;
    const lyrics = req.body.lyrics;
    const connection = await connect();
    const results = await connection.query("UPDATE Song SET Lyrics = ? WHERE SongID = ?;", [lyrics, songID]);
    connection.end();
    res.send(results);
}

export const deleteSong = async (req, res) => {
    const songID = req.params.songid;
    const connection = await connect();
    const results = await connection.query("DELETE FROM Song WHERE SongID = ?;", [songID]);
    connection.end();
    res.send(results);
}