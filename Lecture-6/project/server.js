const express = require('express')
const app = express()
const path = require('path')

let employee = [
    {name:'Saurav',inOffice:true},
    {name:'Amrit',inOffice:false},
    {name:'Rajkamal',inOffice:false},
    {name:'Sahil',inOffice:true}
]
app.use('/file',express.static(path.join(__dirname,'static')))

app.get('/addemployee',(req,res)=>{
    employee.push({
        name:req.query,name,
        inOffice:true
    })
    res.send('success')
})

app.get('/getemployee',(req,res)=>{
    res.send(employee)
})


app.listen(3333,()=>{
    console.log('server started at http://localhost:3333')
})