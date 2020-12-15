console.log(new Date().getTime())

function fun(){
    console.log("Function is running")
}

setTimeout(fun,5000)
setTimeout(function(){
    console.log("Another function running")
},4000)

// function waitASec(){
//     let x = new Date().getTime()
//     while(new Date().getTime()<x+1000){

//     }
// }

// function waitNSec(N,fun1){
//     for(let i = 0 ; i < N ; i++){
//         waitASec()
//     }
//     fun1()
// }

// waitNSec(4,fun)
console.log("Some other tasks")
console.log("Some more tasks")

