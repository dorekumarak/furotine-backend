// models/product.js

<<<<<<< HEAD
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
    },
    offerPrice: {
      type: Number,
    },
    category: {
      type: String,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
=======
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);
>>>>>>> 9c894fe759973b7c960545124345526e90c8310b
