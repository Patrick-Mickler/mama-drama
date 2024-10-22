// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

 
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let bot = Math.random()
    if (bot < .33){
        return 'rock'
    }else if(bot >.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
    let bot = rockPaperScissors()
    if (choice =='rock' && bot === 'scissors' ||  choice === 'paper' && bot ==='rock' || choice === 'scissors' && bot === 'paper'){
        console.log('you win')
    }else if (choice === bot ){
        console.log('you tied')
    }else{
        console.log('you lost')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr){
    arr.forEach(choice => checkWin(choice))
}
playGame(['rock','paper', 'scissors'])