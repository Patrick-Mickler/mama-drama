//Create a stopwatch object that has four properties and three methods
let stopWatch = {
    color : 'black',
    brand : 'Nike',
    shape : 'round',
    size : 'large',

     describeColor(){
        return `I am ${this.color}`
     }
      whatBrand(){
        return `I am made by ${this.brand}`
     }
   sizeAndShape(){
         return `I am ${this.size} and ${this.shape}`
     }


}

console.log(stopWatch(describeColor(), whatBrand(),sizeAndShape()));

  

