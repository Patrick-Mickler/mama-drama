//Create a stopwatch object that has four properties and three methods
let stopWatch = {
    color : 'black',
    brand : 'Nike',
    shape : 'round',
    size : 'large',
}

    function describeColor(){
       return `I am ${this.color}`
    }
    function whatBrand(){
       return `I am made by ${this.brand}`
    }
    function sizeAndShape(){
        return `I am ${this.size} and ${this.shape}`
    }
    console.log(describeColor(stopWatch), whatBrand(stopWatch),sizeAndShape(stopWatch));


  

