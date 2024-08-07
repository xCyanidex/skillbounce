import express from 'express';
import { getAllUsers, getUserById, loginUser, registerUser } from '../controllers/userController.js';


const router = express.Router();


// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get All Users
router.get('/', getAllUsers);

//Get User By Id
router.get('/:id',getUserById)



export default router;
