const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Success')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})