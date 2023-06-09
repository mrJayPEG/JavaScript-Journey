function startNewGame() {
    if (players[0].name === '' || player[1].name === '') {
        alert('Please set names for both players to continue!')
        return;
    }
    gameAreaElement.style.display = 'block';
}