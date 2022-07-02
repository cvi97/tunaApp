import { Router } from 'express';
import { deleteTuna, getTuna, getTunas, getNumerOfUsers, saveTuna, deleteAllTunas, getUsersByTuna } from '../controllers/tunas'
import { validateToken } from "../validate-token";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tunas
 *  description: Tunas endpoint
 */


/**
 * @swagger
 * /tunas:
 *  get:
 *   description: Use to get all tunas
 *   tags: [Tunas]
 */
router.get('/tunas', getTunas)

/**
 * @swagger
 * /tunas/{tunaId}/countofusers:
 *  get:
 *   description: Use to get the number of users in a tuna
 *   tags: [Tunas]
 */
router.get('/tunas/:tunaid/countofusers', getNumerOfUsers)

/**
 * @swagger
 * /tunas/{tunaId}/users:
 *  get:
 *   description: Use to get all users in a tuna
 *   tags: [Tunas]
 */
router.get('/tunas/users', validateToken, getUsersByTuna)


/**
 * @swagger
 * /tunas/{tunaId}:
 *  get:
 *   description: Use to get one tuna by id
 *   tags: [Tunas]
 */
router.get('/tunas/:id', getTuna)

/**
 * @swagger
 * /tunas:
 *  post:
 *   description: Use to save a tuna
 *   tags: [Tunas]
 */
router.post('/tunas/', saveTuna)

/**
 * @swagger
 * /tunas/{tunaId}:
 *  delete:
 *   description: Use to delete a tuna by id
 *   tags: [Tunas]
 */
router.delete('/tunas/:id', deleteTuna)

/**
 * @swagger
 * /tunas/delete_all:
 *  delete:
 *   description: Use to delete all tunas
 *   tags: [Tunas]
 */
router.delete('/tunas/delete_all', deleteAllTunas)



export default router;