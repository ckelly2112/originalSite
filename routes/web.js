const express = require('express')
const route = express.Router();

route.get('/', (req, res)=>{
    res.render('webProjects/webOverview')
})
route.get('/Rush', (req, res)=>{
    res.render('webProjects/rushOverview');
})

route.get('/Template', (req, res)=>{
    res.redirect('https://horizon-demo.squarespace.com/?nochrome=false')
})

route.get('/RushWebsite', (req,res)=>{
    res.sendFile('index.html', {root: './public/html'})
})


module.exports=route;