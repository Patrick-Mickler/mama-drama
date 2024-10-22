const cells = document.querySelectorAll('.cell');
const gameText = document.getElementById('#gameText');
const restartBtn = document.getElementById('#resetGame');
const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ['','','','','','','','',''];
let currentPlayer = 'X';
let running = false;

initializeGame()
function initializeGame(){
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    document.querySelector('button').addEventListener('click', restartGame);
    document.querySelector('h2').textContent = `It's ${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex');
    if (options[cellIndex] != '' || !running){
        return;
    }
    updateCell(this,cellIndex);
    checkWinner();

}
function updateCell(cells,index){
    options[index] = currentPlayer;
    cells.textContent = currentPlayer;

}
function changePlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
   document.querySelector('h2').textContent = `it's ${currentPlayer}'s turn`
}
function checkWinner(){
     let roundWon = false;
     for(let i= 0 ; i < winConditions.length; i++ ){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA ==''|| cellB == ''|| cellC ==''){
            continue;
        }
        if (cellA == cellB && cellB== cellC){
            roundWon = true;
            break;
        }
        if (roundWon){
            document.querySelector('h2').textContent = `${currentPlayer} Wins!`;
            running = false;
        }
        else if (!options.includes('')){ 
            document.querySelector('h2').textContent = `Draw!`;
            running = false;

        }
        else{
            changePlayer();
        }

     }

}
function restartGame(){

}