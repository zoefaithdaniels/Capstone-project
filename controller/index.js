const express = required('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model');
const user = new User();
const product = new Product();

route.get('^/&|/node', (req, res)=>{
    res.status(200).sendFile(path.join(_dirname, '../view/index.html'));
})

route.post('/login', bodyParser.json(),(req, res)=>{
    user.fetchUsers(req, res);
})

route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});

route.get('/user/:id',(req,res)=>{
    user.fetchUser(req, res);
});

route.put('/user/:id', bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});

route.post('/register', bodyParser.json(),(req,res)=> {
    user.createUser(req, res);
})

route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
})

route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})

route.get('/product/:id',(req, res)=> {
    product.fetchProduct(req, res);
})

route.post('/products',bodyParser.json(),(req, res)=>{
    product.addProduct(req,res); 
})

route.put('/product/:id',bodyParser.json(),(req, res)=> {
    product.updateProduct(req, res);
})
route.delete('/product/:id',(req,res)=>{
    product.deleteProduct(req, res);
})

module.exports =route;