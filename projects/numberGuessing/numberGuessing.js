let button = document.getElementById('guessForm');
let output = document.getElementById('outputtext');
let guesses = document.getElementById('guesses');
let userInput = document.getElementById('userInput');

let number = Math.floor(Math.random() * 100 + 1);
let numOfGuess = 10;

button.addEventListener('submit', function (event) {
    event.preventDefault();
    numOfGuess--;
    let input = userInput.value;
    if (input == number) {
        output.innerHTML = `<font color=\"green\">Bingo!</font> The number was ${number}.`;
    } else if (input < number) {
        output.innerHTML = "<font color=\"blue\">Too low!</font> Please try again."
    } else if (input > number) {
        output.innerHTML = "<font color=\"red\">Too high!</font> Please try again."
    } else {
        alert('Please enter a number')
        numOfGuess++;
    }
    guesses.innerHTML = `Remaining guesses: <strong>${numOfGuess}</strong>`;
    userInput.value = "";
    if (numOfGuess <= 0 && input != number) {
        output.innerHTML = "Game Over!"
    }
})


