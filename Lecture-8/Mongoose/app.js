const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/routes')
const session = require('express-session')

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
app.set('view engine','hbs')

app.use('/',route)


// Error handler Middleware - Last middle ware
app.use((err,req,res,next)=>{
    res.render('error',{
        message:err.message
    })
})

app.listen(4444,()=>{
    console.log('Server Started at http://localhost:4444')
})