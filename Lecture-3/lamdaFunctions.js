let a = ()=>{
    console.log("Hello")
}

a()

let obj = {
    a: true,
    b: ()=>{
        console.log(this)
    }
}
let obj1 = {
    a: true,
    b: ()=>{
        console.log(this)
    }
}
console.log(obj.b())
console.log(obj1.b())

let fun = (langauge)=>{
    console.log(`Learning ${langauge} is Fun`)
}

fun('Java')

let sqrt = (i)=> Math.sqrt(i)

let arr = [5,4,6,7,8,1,2,3,0,-1,11,1231,121,124] // [4,5,6,7,8]
arr.sort((a,b)=>a-b)
console.log(arr)

arr = [1,2,3,4,5]
let ans = arr.reduce((accum,val,indx,arr)=>{
    console.log(arr,indx)
    return accum+val
})
console.log(ans)

// arr = arr.filter((i)=>i%2==0)
// console.log(arr)

arr = arr.map((i)=>i*i*i)
console.log(arr)