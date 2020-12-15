class Person{
    constructor(name,age){
        this.name = name
        // this.age = age
        this.isAdult = function(){
            return age>18
        }
    }
    get firstName(){
        return this.name.split(' ')[0]
    }
    set lastName(newLastName){
        this.name = this.name.split(' ')
        this.name.pop()
        this.name.push(newLastName)
        this.name = this.name.join(' ')
    }
    static myFun(){
        return "Hello"
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks
    }
}

let p = new Person("Kartik Mathur",15)
let p1 = new Person("Rahul ABC",30)
let s = new Student("Amrit Jain",25,80)

console.log(s.name)
console.log(s.isAdult())
console.log(s.marks)
console.log(Person.myFun())
// console.log(p.firstName)
// p1.lastName = "DEF"
// console.log(p1.name)

