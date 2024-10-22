// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink ="Sweet Tea"
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'kiwi, pear ,apple'
     

       console.log(words.includes('apple'))
   
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
     let result =  Math.random()
     if(result < .33){
        return ('rock')
     }else if (result< .66){
       return ('paper')
     }else{
       return ('scissors')
     }
}
//rockPaperScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWinner(rps){
       let bot = rockPaperScissors()
       if (rps === 'rock' && bot === 'scissors'){
              console.log('you win')
       }else if (rps === 'paper' && bot === 'rock'){
              console.log('you win')
       }else if (rps === 'scissors' && bot === 'paper'){
              console.log('you win')
       }else if (rps === bot){
              console.log('you tied')
       }else{
              console.log(' you lose')
       }

}




//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arry){
       
       arry.forEach(choice => checkWinner(choice))
}
playGame(['rock','paper' , 'scissors'])