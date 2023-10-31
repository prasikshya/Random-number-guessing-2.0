
const randomNumber = Math.floor(Math.random() * 100) + 1;


const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const message = document.querySelector(".message");

let attempts = 0;

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    
    const userGuess = parseInt(guessField.value);

    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = "You win!";
            guessSubmit.disabled = true;
        } else if (attempts === 10) {
            message.textContent = "You lose. The number was " + randomNumber + ".";
            guessSubmit.disabled = true;
        } else {
            const hint = userGuess < randomNumber ? "Try a higher number." : "Try a lower number.";
            message.textContent = "Wrong guess. " + hint + " Attempts left: " + (10 - attempts);
        }
    }

    guessField.value = "";
}
