const file2 = require('./file2')

console.log('Running File 1')
let a = 10
// function lib1(){
//     console.log('This is lib1')
// }

// module.exports = {
//     lib2,
//     a
// }
module.exports.file2 = file2
module.exports.a = a