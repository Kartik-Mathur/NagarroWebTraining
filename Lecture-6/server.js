const express = require('express')
const path = require('path')
const app = express()

let todos = []
app.use('/site',express.static(path.join(__dirname,'static')))

app.get('/addtask',(req,res)=>{
    todos.push(req.query.task)
    res.send('success')
})

app.get('/gettodos',(req,res)=>{
    res.send(todos)
})

// server.get('/hello/:name',(req,res)=>{
//     res.send(`Hello World! ${req.params.name}`)
// })

// app.get('/bye',(req,res)=>{
    // res.send(`GoodBye!! ${req.query.name} ${req.query.age}`)
    // res.sendFile(path.join(__dirname,'static/index.html'))
// })

// app.get('/script.js',(req,res)=>{
//     res.send(`console.log("Hello World!")`)
// })

app.listen(4444,()=>{
    console.log('server started at http://localhost:4444')
})