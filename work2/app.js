const express=require('express')
const app=express()
const aaa=require('./routes/products.routes')
app.use(express.json())
app.use('/products',aaa)
module.exports=app