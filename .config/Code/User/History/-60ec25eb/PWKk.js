const cells = document.querySelectorAll('.cell');
const gameText = document.querySelector('#gameText');
const restartBtn = document.querySelector('#resetGame');
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

function initializeGame(){
    cells.forEach(cell => addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    gameText.textContent = `It's ${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex');
    if (options[cellIndex] != '' || !running){
        return;
    }
    updateCell(this,index);
    checkWinner();

}
function updateCell(cells,index){
    options[index] = currentPlayer;
    cells.innertText = currentPlayer;

}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}