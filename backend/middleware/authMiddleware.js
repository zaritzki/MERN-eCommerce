import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1] // split the Bearer text by space ([0] = Bearer [1] = token)
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // console.log(decoded)
            req.user = await User.findById(decoded.id).select('-password') // .select('-password') = get all data except password

            next()

        } catch(error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token');
    }
})

export { protect }