console.log([] == ' ')
console.log([] == 0)
console.log(1 == '1')
console.log(1 === '1')

console.log(+[])
console.log(+'1')
console.log(+'adsad')

console.log(Number('1'))
console.log(parseFloat(1.11))
console.log(parseInt(1.11))

console.log(Infinity+(-Infinity))

let arr = [1,2,3]
// let b = arr -> Shallow copy
let b = []

for(let i = 0 ; i < arr.length ; i++){
    b.push(arr[i])
}
b[0] = 10
console.log([1,2,3] == arr)
console.log(b == arr)
console.log(arr) 
console.log(b) 

console.log(+[[],[]])

obj= {
    a : "Hello",
}
obj.o = obj

console.log(obj)
console.log(obj.o.o.o.o.o.o.o.o.o.o.o.o.o.o)