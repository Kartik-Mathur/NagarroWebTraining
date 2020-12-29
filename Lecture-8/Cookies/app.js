const express = require('express')
const session = require('express-session')
const app = express()
// req.session

app.use(session({
    secret: 'sndbabdbasjbdassdb ahdasnmdbashmdabsdamdvad',
    resave: false,// if there is any change in cookie data
    saveUninitialized: true // whether cookie is needed or not, create it
}))

app.get('/hi',(req,res)=>{
    if(!req.session.hiCounter){
        req.session.hiCounter = 0
    }
    req.session.hiCounter++ // 1
    if(req.session.hiCounter == 1){
        return res.send('Welcome for the first time')
    }
    else{
        return res.send('Welcome Again!')
    }
})

app.get('/bye',(req,res)=>{
    if(!req.session.hiCounter){
        return res.redirect('/hi')
    }
    return res.send('Good Bye!')
})


app.listen(4444,()=>{
    console.log('Server Started at http://localhost:4444')
})