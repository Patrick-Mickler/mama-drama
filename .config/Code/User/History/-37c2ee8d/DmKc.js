//Create a constructor with 4 properties and 3 methods
function MakePizza(size,shape,crust,topping){
    this.size = size
    this.shape = shape 
    this.crust = crust 
    this.topping = topping
    this. burnMouth = function(){
        console.log('jbasfdbhabeiufbvuabeiurbvjbaiufbvubi')
    }
    this.gone = function(){
        console.log('oh im sad')
    }
    this.ordermore = function(){
        alert('order more') 
    }
}
let pizzaTwo = new MakePizza('large','round','stuffed crust', 'pepperoni')