import { Router } from "express";   // import Router from express
import { getUsers, saveUser } from "../controllers/users";    // import the getUsers function from the users.js file

const router = Router();    

router.get('/users', getUsers);   

router.post('/users', saveUser);

export default router;