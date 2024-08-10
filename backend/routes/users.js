import express from 'express';
import { getAllUsers, getUserById, loginUser, logoutUser, registerUser, updateUser } from '../controllers/userController.js';
import { userProtect } from '../middleware/user.js';

const router = express.Router();


// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get All Users
router.get('/', getAllUsers);

//Get User By Id
router.get('/:id',getUserById)

router.post('/update/:id', userProtect, updateUser)

router.post('/logout',logoutUser);



export default router;
