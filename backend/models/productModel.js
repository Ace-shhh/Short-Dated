const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
        required: true
    },
    remind: {
        type: Number,
        required: true
    }

    

}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)