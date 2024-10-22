//Create a stopwatch object that has four properties and three methods
let stopWatch = {
    color : 'black',
    brand : 'Nike',
    shape : 'round',
    size : 'large';
}

    function describeColor(){
        console.log(this.color);
    }
    function whatBrand(){
        console.log(this.brand)
    }
    function sizeAndShape(){
        console.log(`I am ${this.size} and ${this.shape}`)
    }



  

