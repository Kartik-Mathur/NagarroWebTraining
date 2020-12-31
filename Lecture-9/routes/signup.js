const route = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

// Get '/'
route.get('/',(req,res)=>{
    return res.render('signup',{
        title:'Signup!'
    })
})

// POST '/'
route.post('/',(req,res,next)=>{
    let userData = {
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password
    }
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        // Store hash in your password DB.
        userData.password = hash
        User.create(userData,(err,user)=>{
            if(err) return next(err)
            return res.redirect('/login')
        })
    })
})

module.exports = route