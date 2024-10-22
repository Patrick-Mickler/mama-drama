// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positive = 'hey you are a good person!'
console.log(`${positive.repeat(10)}`)
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arry = ['h', 'e', 'y']
let string =arry.join()
alert(string)
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rockPaperScissorsLizardSpock(){
    let choice = math.random()
    if (choice <.20){
        return 'rock'
    }else if ( choice <.40 ){
        return 'paper'
    }else if (choice <.60){
        return 'scissors'
    }else if (choice <.80){
        return 'lizard'
    }else{
        return 'spock'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

function gamePlay(player){
   let bot = rockPaperScissorsLizardSpock();
   let player = player
   if (bot)

}
