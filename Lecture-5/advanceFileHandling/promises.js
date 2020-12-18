const fs = require('fs')
const path = require('path')

const F1 = path.join(__dirname,'file1.txt')
const F2 = path.join(__dirname,'file2.txt')
const F3 = path.join(__dirname,'output.txt')

function readF1(){
    return new Promise((resolve,reject)=>{
        fs.readFile(
            F1,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split('\n')
                resolve(data)
            }
        )
        
    })
}

function readF2(){
    return new Promise((resolve,reject)=>{
        fs.readFile(
            F2,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split('\n')
                resolve(data)
            }
        )
    })
}

function writeF3(data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(
            F3,
            data,
            (err)=>{
                if(err) throw err
                resolve()
            }
        )
    })
}

let ans

readF1()
    .then((data)=>{
        ans = data
        return readF2()
    })
    .then((data)=>{
        ans.concat(data)
        ans.sort((a,b)=>a-b)
        ans = ans.join('\n')
        return writeF3(ans)
    })
    .then(()=>{
        console.log("Everything done!")
    })
    .catch((err)=>{
        console.log(err.message)
    })