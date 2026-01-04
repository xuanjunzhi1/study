const express=require('express')
const routes=express.Router()
const aaa=require('../controllers/product.controller')
routes.put('/:id',aaa.lll)
module.exports=routes