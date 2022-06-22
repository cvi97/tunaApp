import { Router } from "express";   // import Router from express
import { getUsers, saveUser, updateUserMote } from "../controllers/users";    // import the getUsers function from the users.js file

const router = Router();    

router.get('/users', getUsers);   

router.post('/tunas/:tunaid/users', saveUser);

router.put('/users/:userid', updateUserMote);

export default router;