let button = document.getElementById('button');
let output = document.getElementById('outputtext');
let guesses = document.getElementById('guesses');

let number = Math.floor(Math.random()*100+1);
let numOfGuess = 10;

button.addEventListener('click',function(){
  numOfGuess--;
  let input = document.getElementById('userInput').value;
  if(input==number){
    output.innerHTML = `<font color=\"green\">Bingo!</font> The number was ${number}.`;
  } else if(input < number){
    output.innerHTML = "<font color=\"blue\">Too low!</font> Please try again."
  } else if (input > number){
    output.innerHTML = "<font color=\"red\">Too high!</font> Please try again."
  } else{
    alert('Please enter a number')
  }
  guesses.innerHTML = `Remaining guesses: <strong>${numOfGuess}</strong>`;
  if(numOfGuess <= 0 && input!=number){
    output.innerHTML = "Game Over!"
  }
})


