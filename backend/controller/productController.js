const Product = require('../models/productModel')
const mongoose = require('mongoose')



// get all product
const getProducts = async (req, res) =>{
    const productDb = await Product.find({}).sort({createdAt: -1})

    res.status(200).json(productDb);
}

// get single product
const getSingleProduct = async(req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product/ Wrong Id'})
    }

    const productDb = await Product.findById(id)

    if(!productDb){
        return res.status(404).json({error: 'No such product.'})
    }

    res.status(200).json(productDb)
}

// create new product
const createProduct = async (req, res) =>{
    console.log(req.body)
    const {section, type, brand, expiry, remind} = req.body;

    try {
        const product = await Product.create({section, type, brand, expiry, remind})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete product

const deleteProduct = async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product/ Wrong Id'})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if(!product){
        return res.status(400).json({error: 'No such Product'})
    }

    res.status(200).json(product)
}

//update product

const updateProduct = async (req, res) =>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product / Wrong id'})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(200).json(product)
    }

}

module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
}