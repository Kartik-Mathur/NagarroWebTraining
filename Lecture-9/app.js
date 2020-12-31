const express = require('express')
const mongoose = require('mongoose')
const app = express()
const session = require('express-session')
const passport = require('./passport')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// mongodb connection
mongoose.connect('mongodb://localhost:27017/movies')
const db = mongoose.connection
db.on('error', (err)=>{
    console.error(err)
})
app.use(session({
    secret:'skandakjbdbasdabdabsk adnabdasndvasmvd dabsd',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine','hbs')
app.use('/login',require('./routes/login'))
app.use('/profile',require('./routes/profile'))
app.use('/signup',require('./routes/signup'))


// Error handler Middleware - Last middle ware
app.use((err,req,res,next)=>{
    return res.render('error',{
        message:err.message,
        title:'Error Page'
    })
})

app.listen(4444,()=>{
    console.log('Server Started at http://localhost:4444')
})