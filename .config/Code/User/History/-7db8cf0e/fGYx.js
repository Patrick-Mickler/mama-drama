// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
let newArray =[1,5,4,4]


function arrayComparison(x){
    for (i=0 ;i<newArray.length ;i++){
        if (i > newArray){
            alert ('hi')
        }
    }
    else if( i<newArray){
        alert('bye')
    }
    else {
        alert('we close in an hour')
    }
}
arrayComparison(newArray[0])