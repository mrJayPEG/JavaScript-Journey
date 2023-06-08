 //This is the file which executes first

 const playerConfigOverlayElement = document.getElementById('config-overlay');
 const backdropElement = document.getElementById('backdrop');
 const formElement = document.querySelector('form');
 const errorsOutputElement = document.getElementById('config-errors');
 
 const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
 const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
 const cancelConfigBtnELement = document.getElementById('cancel-btn');

 editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
 editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
 
 cancelConfigBtnELement.addEventListener('click', closePlayerConfig);
 backdropElement.addEventListener('click', closePlayerConfig);

 formElement.addEventListener('submit', savePlayerConfig);