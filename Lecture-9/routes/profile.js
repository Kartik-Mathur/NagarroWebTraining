const route = require('express').Router()


route.get('/',(req,res)=>{
    console.log("Inside Profile",req.user)
    return res.render('profile',{
        user:req.user // passport gives us the current logged in user by req.user
    })
})

module.exports = route