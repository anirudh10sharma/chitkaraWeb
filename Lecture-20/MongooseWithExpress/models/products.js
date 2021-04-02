const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        min:0
    },
    desc: {
        type: String,
        minLength:10
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;