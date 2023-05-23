function openPlayerConfig() {
    playerConfigOverlasyElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfihg() {
    playerConfigOverlasyElement.style.display = "none";
    backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim(); 
    
    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        errorOutputElement.textContent = "Please enter a valid name!";
        return;        
    }
}