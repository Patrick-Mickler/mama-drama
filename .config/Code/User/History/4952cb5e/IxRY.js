//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
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
let baja = new Cat ('Baja','tabby')

class Turtle extends Animal{
    constructor(name,breed){
        super(name)
        this.breed= breed
    }
} let Franklin = new Turtle('Franklin', 'Box')
 