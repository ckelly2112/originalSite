const express=require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.render('general/home');
})

route.get('/aboutMe', (req,res)=>{
    res.render('general/aboutMe')
})

route.get('/links', (req,res)=>{
    res.render('general/Links')
})
module.exports = route;