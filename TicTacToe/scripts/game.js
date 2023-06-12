function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set names for both players to continue!')
        return;
    }
    activePlayerId.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerId.textContent = players[activePlayer].name;
}

function selectGameField(event) { 

    const selectedField = event.target;    
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;

    if (gameData[selectedRow][selectedColumn] > 0){
        alert('Please select an empty box')
        return
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}