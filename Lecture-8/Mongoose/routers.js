const express = require('express')
const app = express()
const routes = 
{
    route:require('./routes/routes'),
    teacher:require('./routes/teachers')
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/mentors',routes.teacher)
app.use('/',routes.route)

app.listen(4444,()=>{
    console.log('Server Started at http://localhost:4444')
})