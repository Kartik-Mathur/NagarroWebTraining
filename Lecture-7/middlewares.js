const express = require('express')
const app = express()

app.use('/site',f1) // will work for /site/abc/def/..., not for /siteabc -> Path specific
app.use(f2) // -> Global middleware
app.use(f3)

function f1(req,res,next){
    console.log('running f1')
    console.log(req.query)
    console.log(req.url)
    if(req.query.m==1){
        res.send('Sending some other data')
    }
    else{
        next()
    }
}

function f2(req,res,next){
    console.log('running f2')
    next()
}

function f3(req,res,next){
    console.log('running f3')
    next()
}

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/site',(req,res)=>{ // this will only work for /site, not for /site/abc/.....
    res.send('Loading new site')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})