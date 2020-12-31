const express = require('express')
const route = express.Router()
const User = require('../models/user')

// Get '/logout
route.get('/logout',(req,res,next)=>{
    req.session.destroy(function(err) {
        if(err) return next(err)
        return res.redirect('/')
    })
})

// GET '/profile
route.get('/profile',(req,res,next)=>{
    if(!req.session.userID){
        return res.redirect('/login')
    }
    User.findById(req.session.userID)
        .exec((err,user)=>{
            if(err) return next(err)
            return res.render('profile',{
                title:'Profile',
                name:user.name
            })
        })
})

// GET '/login'
route.get('/login',(req,res)=>{
    return res.render('login',{
        title:"Login!"
    })
})

// POST '/login'
route.post('/login',(req,res,next)=>{
    if(req.body.password && req.body.email){
        User.authenticate(req.body.email,req.body.password,(err,user)=>{
            if(err||!user) return next(err)
            req.session.userID = user._id
            return res.redirect('/profile')
        })
    }
    else{
        let err = new Error('Please Enter Email and Password Both!')
        err.status = 400
        return next(err)
    }
})

// GET '/register'
route.get('/register',(req,res)=>{
    return res.render('signup',{
        title:"Sign Up!"
    })
})

// POST '/register'
route.post('/register',(req,res,next)=>{
    if(req.body.name && req.body.password && req.body.email){
        var userData = {
            name: req.body.name,
            password: req.body.password,
            email:req.body.email   
        }
        User.create(userData,(err,user)=>{
            if(err) return next(err)
            req.session.userID = user._id
            return res.redirect('/profile')
        })
    }
    else{
        let err = new Error('Please enter all the fields')
        err.status = 400
        return next(err)
    }
})

// GET '/'
route.get('/',(req,res)=>{
    return res.render('home',{
        title:'Home Page!'
    })
})

module.exports = route