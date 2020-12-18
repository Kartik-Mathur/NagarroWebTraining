function add(x){
    if(!x) return 0
    let ans = x

    function addNew(y){
        if(!y) return ans
        ans += y
        return addNew
    }
    return addNew
}

console.log(add(1)(2)(3)(4)(5)())
console.log(add(1)(2)(3)(4)())
console.log(add(1)(2)(3)())
console.log(add(1)(2)())
console.log(add(1)())
console.log(add())