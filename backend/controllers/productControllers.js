import Product from '../models/productModel.js'
import asyncHandler from "express-async-handler"


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products= await Product.find({})
    res.json(products) 
})
  
  // @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product=await Product.findById(req.params.id).catch(e => false);

//   //why we use catch
//   //The reason you're not seeing that 404 is, most likely, because you are calling the route with something like /products/dflhdshfd. The problem with that is that findById only accepts strings that can be cast to an ObjectId, which, of course dflhdshfd cannot be. Hence when you call your route with /products/dflhdshfd, your app bombs and throws this error:

  if(product){
    res.json(product)
  }
  else{
    res.status(404).json({message:'Product not found'})
  }
    
  })

  export {getProducts,getProductById}