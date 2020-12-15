let a = {
    k:1,
    l:"string",
    m:true
}

let b = Object.create(a)

// console.log(a)

b.k = 10
console.log(b)
console.log(a)

// console.log(b.k)
// if(b.hasOwnProperty('k')){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }

let c = Object.create(b)

// console.log(b.l)
// console.log(b.m)

// console.log(parseInt(10.1))
console.log(c)
console.log(c.k)

console.log(c.__proto__) 
console.log(c.__proto__ == b) 
console.log(b.__proto__)
console.log(b.__proto__ == a)
console.log(c.__proto__.__proto__)
console.log(c.__proto__.__proto__ == a)
console.log(a.__proto__)