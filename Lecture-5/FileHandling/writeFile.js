const fs = require('fs')
const path = require('path')
console.log(__dirname)
fs.writeFile(
    path.join(__dirname,'Hello.txt'),
    'We are writing hello, again',
    {
        encoding: 'utf-8',
        flag:'w'
    },
    (err)=>{
        if(err) throw err
        console.log('File written')
    })