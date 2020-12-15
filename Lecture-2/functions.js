function fun(){
    return 'k';
}

console.log(fun.__proto__)
console.log(Boolean().__proto__ == Boolean.prototype)
console.log(Boolean())


console.log(Number().__proto__ == Number.prototype)
console.log(Number())

console.log(String().__proto__ == String.prototype)

console.log(fun().__proto__ == String.prototype)