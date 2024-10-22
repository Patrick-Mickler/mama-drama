//Create a pizza object that has four properties and three methods
let pizza = {}
pizza.shape=round
pizza.size=large
pizza.cheese=extra
pizza.peperoni=yes

pizza.slice = function pizzaSlice(){
    console.log('slicey')
}
pizza.eat = function yum(){
    console.log('yum')
}
pizza.gone = function sad (){
    console.log('im sad now')
}