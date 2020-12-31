const route = require('express').Router()
const passport = require('passport')

// GET '/'
route.get('/',(req,res)=>{
    if(req.user){
        res.redirect('/profile')
    }
    return res.render('login',{
        title:'Login'
    })
})

// Post '/'
route.post('/',passport.authenticate('local',{
    failureRedirect:'/hello',
    successRedirect:'/profile'
}))

// Get '/facebook'
route.get('/facebook',passport.authenticate('facebook'))

// GET '/facebook/callback
route.get('/facebook/callback',passport.authenticate('facebook',{
    failureRedirect:'/login',
    successRedirect:'/profile'
}))

module.exports = route