const express = require('express')
const route = express.Router()


route.get('/',(req,res)=>{
    res.send('Hello Welcome Teacher')
})

route.get('/hi',(req,res)=>{
    res.send('Hi Welcome Back, your subject is math!')
})

module.exports = route