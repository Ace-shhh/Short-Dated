const express = require('express')

const router = express.Router()



const {
    createProduct,
    getProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
}= require('../controller/productController')



//GET all products
router.get('/', getProducts)

//GET single product
router.get('/:id', getSingleProduct)

//POST a new product
router.post('/', createProduct)

//DELETE a product

router.delete('/:id', deleteProduct)

//UPDATE a product

router.patch('/:id', updateProduct)

module.exports = router