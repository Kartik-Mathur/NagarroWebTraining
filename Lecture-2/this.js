function fun(name){
    console.log("Inside fun ",this)
    console.log(name)
}

let a = {
    k:1,
    l:true,
    m:function(){
        return this;
    }
}
let b={
    k:10,
    l:true
}

console.log(a.m())

fun.call(b,"Amit") // Explicit Binding
let funbind = fun.bind(a) // Explicit Binding
funbind("kartik")