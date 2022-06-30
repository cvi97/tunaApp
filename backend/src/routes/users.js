import { Router } from "express";   // import Router from express
import { getUsers, saveUser, updateUserMote, updateUserPassword, getUserById, getUserPassword, updateUserRole, deleteUser, login } from "../controllers/users";    // import the getUsers function from the users.js file

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
router.get('/users/:userid', getUserById);   // get the user with the userid

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
 * /users:
 *  post:
 *   description: Use to save a user to a tuna
 *   tags: [Users]
 */ 
router.post('/users', saveUser);

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

/**
 * @swagger
 * /users/{userId}/updateRole:
 *  put:
 *   description: Use to update the role of a user by id 
 *   tags: [Users]
 */
router.put('/users/:userid/update_role', updateUserRole);

/**
 * @swagger
 * /users/{userId}:
 *  delete:
 *   description: Use to delete a user by id
 *   tags: [Users]
 */
router.delete('/users/:userid', deleteUser);

/**
 * @swagger
 * /users/login:
 *  post:
 *   description: Use to login a user
 *   tags: [Users]
 */
router.post('/users/login', login);

export default router;