//Create an a class and extend it - Can be anything you would like it to be! 

class Contractor {
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello I am on the,${this._role} team at #100Devs!`)
    }
}
class Frontend extends Contractor{
    consturctor(name,role,tech){
        Super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello I am on the,${this._role} team at #100Devs! and I use ${this._tech}`)
    }
}
class Backend extends Contractor{
    consturctor(name,role,tech){
        Super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello I am on the,${this._role} team at #100Devs! and I use ${this._tech}`)
    }
}
let Patrick = new Contractor('Patrick','Front-end')
let Amber = new Frontend('Amber','Front-end','React')
let Haleigh = new Backend('Haleigh', 'Back-end', 'Node.Js')






/*class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    } 
}

let simba = new Dog('Simba', 'Sheperd')
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}
let baja = new Cat ('Baja','Siberian')

class Turtle extends Animal{
    constructor(name,breed){
        super(name)
        this.breed= breed
    }
} let franklin = new Turtle('Franklin', 'Box')

class Bird extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}
let tom = new Bird ('Tom','turkey') */