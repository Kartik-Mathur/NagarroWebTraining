const fs = require('fs')
const path = require('path')
const util = require('util')

const F1 = path.join(__dirname,'file1.txt')
const F2 = path.join(__dirname,'file2.txt')
const F3 = path.join(__dirname,'output.txt')

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)


let ans
async function sortAndMerge(){
    try{
    let data1 = await read(F1)
    let data2 = await read(F2)

    ans = data1.toString().split('\n')
    ans.concat(data2.toString().split('\n'))
    ans.sort((a,b)=>a-b)

    await write(F3,ans.join('\n'))
    console.log('Everything Done')
    }
    catch(err){
        console.log(err.message)
    }
}

sortAndMerge()
console.log("Other coding stuff")