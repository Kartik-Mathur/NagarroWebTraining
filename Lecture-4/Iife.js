let id = (setTimeout(()=>{
    clearInterval(id)
},5000), setInterval(()=>{
    console.log("Hello")
},1000))

setTimeout((id)=>{
    clearInterval(id)
},5000,setInterval(()=>{console.log("Hello")},1000))

;(function(a,b,cl,ms,mp){
    cl("Multiply : ",a*b)
    cl("Square root of a : ",ms(a))
    cl("Square root of b : ",ms(b))
    cl("Power a to b : ",mp(a,b))
})(2,3,console.log,Math.sqrt,Math.pow)

// function Fun(a,b){
//     console.log("Multiply : ",a*b)
//     console.log("Square root of a : ",Math.sqrt(a))
//     console.log("Square root of b : ",Math.sqrt(b))
// }

// Fun(16,25)

// var x = "Hello"

// !function(name){
//     console.log("Hello",name)
// }("Kartik Mathur")

// var x = "Hello"

// ;(function (name){
//         var x = 10
//         console.log("Hello",name)
// })("Kartik Mathur")

// let s = (function (name){
//     var x = 10,b=true
//     console.log("Hello",name)
//     return b
// })("Kartik Mathur")

// console.log(x)
// console.log(s)