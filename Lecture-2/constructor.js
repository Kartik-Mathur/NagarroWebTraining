function Person(name,age){
    this.name = name
    this.isAdult = function (){
        return age>18
    }
    // this.sayHello = function(){
    //     console.log("Hello")
    // }
    // this.age = age
    // return {k:1}
}

Person.sayHello = Person.prototype.sayHello = function (){
    console.log("Hello")
}

// Person.sayHello = function(){
//     console.log("Hello")
// }

let p = new Person("Kartik",17)
// console.log(Person().__proto__ == Person.prototype)
console.log(new Person().__proto__ == Person.prototype)

console.log(p.name)
console.log(p.age)
console.log(p.isAdult())

let p1 = new Person("Rahul",30)
console.log(p1.name)
console.log(p1.age)
console.log(p1.isAdult())

p.sayHello()
Person.sayHello()
console.log(p)