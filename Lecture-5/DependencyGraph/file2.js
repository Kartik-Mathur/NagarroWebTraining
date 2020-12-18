const file1 = require('./file1')

console.log('Running File 2')
let b = 20
// function lib2(){
//     console.log('This is lib2')
// }

// module.exports = {
//     lib1,
//     b
// }

module.exports.file1 = file1
module.exports.b = b