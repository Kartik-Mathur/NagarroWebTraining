function outerFun(fun){
    console.log("This is outerFun " + fun)
}

function innerFun(){
    console.log("This is innerFun")
}

outerFun(innerFun())

// let x = 10

// function fun(x){
//     console.log(x)
//     console.log(x)
    
//     console.log("Hello")
// }

// fun()
// fun1()

// var fun1 = function(){
//     console.log("World")
// }

// fun1()