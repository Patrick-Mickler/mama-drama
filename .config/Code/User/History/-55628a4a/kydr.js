



    function createGrid(){
        const container = document.getElementById('gameboard');

        for (let i = 0; i <= 16; i++ );
            const newDiv = document.createElement('gameTiles');
            gameTiles.style.width = squareSide + 'px';
            gameTiles.style.height = squareSide + 'px';
            gametiles.style.backgroundColor = 'white';
            gameboard.appendChild(newDiv) 
    }
    createGrid();