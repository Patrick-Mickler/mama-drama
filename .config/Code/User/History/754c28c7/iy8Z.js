// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'pizza' 
favFood = 'bbq'
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'hello'
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takesThree(n1,n2,n3){
    alert((n1/n2)*n3)
}
 takesThree(6,3,1)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takesOne (n1){
    console.log(Math.cbrt(n1))
}
takesOne(30);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(m1){
    if (m1 === 'june'||m1=== 'july'||m1==='august'){
        alert('Yay')
    

    }
    else{
        alert('boo')
    }
}
month('december')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
