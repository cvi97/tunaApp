import { Router } from "express";   // import Router from express
import { getUsers, saveUser, updateUserMote, updateUserPassword, getUser, getUserPassword } from "../controllers/users";    // import the getUsers function from the users.js file

const router = Router();    

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /users:
 *  get:
 *   description: Use to get all users
 *   tags: [Users]
 */
router.get('/users', getUsers);   

/**
 * @swagger
 * /users/{userId}:
 *  get:
 *   description: Use to get one user by id
 *   tags: [Users]
 */
router.get('/users/:userid', getUser);   // get the user with the userid

/**
 * @swagger
 * /users/{userId}/password:
 *  get:
 *   description: Use to get the password of a user by id
 *   tags: [Users]
 */
router.get('/users/:userid/password', getUserPassword);   // get the user's password

/**
 * @swagger
 * /tunas/{tunaId}/users:
 *  post:
 *   description: Use to save a user to a tuna
 *   tags: [Users]
 */ 
router.post('/tunas/:tunaid/users', saveUser);

/**
 * @swagger
 * /users/{userId}/updateMote:
 *  put:
 *   description: Use to update the mote of a user by id
 *   tags: [Users]
 */
router.put('/users/:userid/update_mote', updateUserMote);

/**
 * @swagger
 * /users/{userId}/updatePassword:
 *  put:
 *   description: Use to update the password of a user by id
 *   tags: [Users]
 */
router.put('/users/:userid/update_password', updateUserPassword);

export default router;