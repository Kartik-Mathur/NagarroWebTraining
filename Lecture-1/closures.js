function FunGen(){
    let x = 1
    function newFun(){
        x++  
        function newestFun(){
            x++
            // console.log(x)
            return x
        }
        return newestFun
    }
    return newFun
}

let fun1 = FunGen()
let fun2 = FunGen()
let fun11 = fun1()
let fun12 = fun1()
let fun21 = fun2()

console.log(fun11())
console.log(fun11())
console.log(fun11())
console.log(fun12())
console.log(fun12())
console.log(fun21())
console.log(fun21())
// 3 4 5 3 4 3 4


// function FunGen(){
//     let x = 1
//     function newFun(){
//         x++  
//         console.log(x)
//     }
//     return newFun
// }

// let fun = FunGen()
// let fun1 = FunGen()
// fun()
// fun()
// fun()
// fun1()
// fun()
// fun1()
// fun1()
// fun1()