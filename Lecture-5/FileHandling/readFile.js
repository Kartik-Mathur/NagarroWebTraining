const fs = require('fs')
const path = require('path')
// console.log(path.join('a','b'))
// console.log(path.join('a','/b'))
// console.log(path.join('a/','/b'))
// console.log(path.join('a/','b'))

fs.readFile(
    path.join(__dirname,'Hello.txt'),
    (err,data)=>{
        if(err) throw err
        console.log(data.toString())
    }
)