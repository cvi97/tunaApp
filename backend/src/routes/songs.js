import { Router } from 'express';
import { changeLyricsSong, getSongsFromTuna, saveSongsTuna, getSongTuna, deleteSong } from '../controllers/songs';
import { validateToken } from "../validate-token";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Songs
 *  description: Songs endpoint
 */


/**
 * @swagger
 * /tunas/{tunaId}/songs:
 *  get:
 *   description: Use to get all songs from a tuna
 *   tags: [Songs]
 */
router.get('/tunas/songs/getall', validateToken, getSongsFromTuna);
/**
 * @swagger
 * /tunas/{tunaId}/songs/{songId}:
 *  get:
 *   description: Use to get one song
 *   tags: [Songs]
 */
router.get('/tunas/:tunaid/songs/:songid', getSongTuna);
/**
 * @swagger
 * /tunas/{tunaId}/songs:
 *  post:
 *   description: Use to save a song
 *   tags: [Songs]
 */
router.post('/tunas/:tunaid/songs', saveSongsTuna);

/**
 * @swagger
 * /songs/{songId}/updateLyrics:
 *  put:
 *   description: Use to change the lyrics of a song
 *   tags: [Songs]
 */
router.put('/songs/:songid/updateLyrics', changeLyricsSong)

/**
 * @swagger
 * /songs/{songId}:
 *  delete:
 *   description: Use to delete a song by id
 *   tags: [Songs]
 */
router.delete('/songs/:songid', deleteSong);

export default router;