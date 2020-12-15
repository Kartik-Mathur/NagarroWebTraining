let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Resolve function running")
        resolve()
    },1000)
})

setTimeout(function(){
    console.log("Calling .then on promise p")
    p.then(function(){
        console.log("Hello World")
    })
    console.log("We are inside a function")
},3000)
