const file1 = require('./file1')
const file2 = require('./file2')

console.log(file1)
console.log(file2)

console.log(file1.file2 == file2)
console.log(file1.file2.file1 == file1)
console.log(file1.file2.file1.file2.file1.file2 == file1.file2)