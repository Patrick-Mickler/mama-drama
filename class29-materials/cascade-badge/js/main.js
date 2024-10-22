//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonParty = ['Pikachu','Riakou','Venusaur']
function reverseParty(n){
    let reversedParty = n.reverse()
    console.log(reversedParty)
}reverseParty(pokemonParty)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function cubesOrSquares(a,b){
   
}
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
let arr = [22, -6, 32, 82, 9, 25] //=>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function newArray(n){
    let multipliedArray = n.map((val,index)=> val*index)
    console.log(multipliedArray)
}newArray(arr)

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sum (x){
    let answer = x.reduce((a,b)=>+a+b ,0)
}