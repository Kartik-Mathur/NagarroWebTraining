function fun(){
    function newFun(){
        console.log("Hello World")
    }
    return newFun
}

let x = fun()
x()

function outerFun(fun){
    console.log("This is outerFun " + fun())
}

function innerFun(){
    console.log("This is innerFun")
}

outerFun(innerFun)
