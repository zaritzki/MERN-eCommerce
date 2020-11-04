import express from 'express'
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

const router = express.Router()


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

// router.get('/api/products', (req, res) => {
router.get(
    '/', 
    asyncHandler(async (req, res) => {    
        // .find({}) - passing empty object to get everything
        const products =  await Product.find({})

        // to test error
        /*
        res.status(401)
        throw new Error('Not Authorised')
        */

        res.json(products)
    })
)

    
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

// router.get('/api/products/:id', (req, res) => {
router.get(
    '/:id', 
    asyncHandler(async (req, res) => {
        // const product = products.find(p => p._id === req.params.id);
        const product = await Product.findById(req.params.id)

        if (product) {
            res.json(product)
        } else {
            // res.status(404).json({ message: 'Product not found' })
            
            res.status(404)
            throw new Error('Product not found')
        }
    })
)

export default router