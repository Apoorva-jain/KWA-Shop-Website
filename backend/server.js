// const express = require('express')
import express from 'express'
// const dotenv = require('dotenv')
import  dotenv from 'dotenv'
// const products = require('./data/products')
import products from './data/products.js'
import connectdb from './config/db.js'
import colors from 'colors'

const app = express()

dotenv.config()
const port = process.env.PORT||5000
app.listen(port, () => {
  console.log(`Example app listening on ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
})
connectdb()

app.get('/', (req, res) => {
    // get data first 
    res.send(`get request called on PORT....: ${port}`)}
)
app.get('/api/products', (req, res) => {
    res.json(products) }
)
app.get('/api/products/:id', (req, res) => {
  const product=products.find(p=>p._id===req.params.id)
  res.json(product) }
)
