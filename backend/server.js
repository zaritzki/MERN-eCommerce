import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// remove this product as we not going to use this one anymore
// import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

// Connect DB
connectDB()

const app = express()

// this is to allow us to acced json data in the body
app.use(express.json())

app.get('/', (req, res) => {
     res.send('API is running...')
})

// Routes - connected to backend/routes/
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Fallback: 404 error and Error Handler
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in '${process.env.NODE_ENV}' mode on port '${PORT}'`.yellow.bold))