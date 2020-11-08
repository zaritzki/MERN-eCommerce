import express from 'express'

const router = express.Router()
import  { 
    authUser
 } from '../controllers/userController.js'


// Get the Route connected to the Controllers
router.post('/login', authUser)

export default router