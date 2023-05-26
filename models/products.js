const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    unique:true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
