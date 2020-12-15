console.log(Number('10'))

let x = 10
console.log(x.__proto__ == Number.prototype)
console.log(typeof Number)

x = 'abc'
console.log(x.__proto__ == String.prototype)
console.log(typeof String)

x = true
console.log(x.__proto__ == Boolean.prototype)
console.log(typeof Boolean)

console.log(Number.prototype.constructor)
console.log(Number.prototype.__proto__)
console.log(Number.prototype.__proto__.__proto__)

console.log("Kartik Mathur".split(' '))