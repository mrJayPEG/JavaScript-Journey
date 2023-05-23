const playerConfigOverlasyElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const fromElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-errors");

//Custom
const cancelButton = document.getElementById("cancel-btn");
//Custom ends

const editPlayer1btnElement = document.getElementById("edit-player-1-btn");
const editPlayer2btnElement = document.getElementById("edit-player-2-btn");

editPlayer1btnElement.addEventListener("click", openPlayerConfig);
editPlayer2btnElement.addEventListener("click", openPlayerConfig);

//Custom begins
cancelButton.addEventListener("click", closePlayerConfig);
//custom ends

fromElement.addEventListener("submit", savePlayerConfig);