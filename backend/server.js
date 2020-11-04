import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// remove this product as we not going to use this one anymore
// import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

// Connect DB
connectDB()

const app = express()

app.get('/', (req, res) => {
     res.send('API is running...')
})

/* REMOVED: Move to routes/productRoutes.js
app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product)
})
*/

app.use('/api/products', productRoutes)

// Fallback: 404 error and Error Handler
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in '${process.env.NODE_ENV}' mode on port '${PORT}'`.yellow.bold))