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
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty box')
        return
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerid = checkForGameOver();
    console.log(winnerid)
    
    currentRound++;
    switchPlayer();
}

function checkForGameOver() {

    //checking the rows for equality
    for (let i = 0; i <= 2; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    //Checking the columns for equality
    for (let i = 0; i <= 2; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][1] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }


    //Checking diagonal from top yo bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    //Checking diagonal from bottom left to top right
    if (
        gameData[0][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }
    return 0;
}