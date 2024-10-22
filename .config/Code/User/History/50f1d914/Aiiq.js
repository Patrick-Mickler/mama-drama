//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeEspressoMachine{
constructor(make,model,color,watertank){
    this.make = make 
    this.model= model
    this.color= color
    this.watertank = watertank
}
brewCoffee(){
    console.log('mmm coffee')
}
overheating(){
    console.log('too hot')
}
coffeesReady(){
    alert('coffees ready')

}
}
let 