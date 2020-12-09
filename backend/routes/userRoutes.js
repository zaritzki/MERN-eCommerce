import express from 'express'

const router = express.Router()
import { 
    authUser,
    registerUser,
    getUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


// Get the Route connected to the Controllers
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile) // use route as we will be making a get and put request

export default router