function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set names for both players to continue!')
        return;
    }
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol; //player[0]
    event.target.classList.add('disabled')
    switchPlayer();
}