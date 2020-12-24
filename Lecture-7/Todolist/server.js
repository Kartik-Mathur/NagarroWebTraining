const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'static')))
let todos = []

app.get('/todos',(req,res)=>{
    res.send(todos)
})

app.post('/todos',(req,res)=>{
    todos.push({
        name:req.body.name,
        marks:req.body.marks,
        age:req.body.age
    })
    res.send('success')// res.redirect('/todos')// or res.send('success')
})

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})