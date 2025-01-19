"use strict";


const guessInput = document.getElementById("guess-input"); 


const guessMessage = document.getElementById("guess-message"); 
const currentGuess = document.getElementById("current-guess"); 
const computerGuess = document.getElementById("computer-guess"); 
const guessHistory = document.getElementById("guess-history"); 
const submitBtn = document.getElementById("submit-btn"); 
const restartBtn = document.getElementById("restart-btn"); 


let randomNumber = Math.floor(Math.random() * 10) + 1; 
let attempts = 0;
let maxAttempts = 3;
let history = [];

function checkGuess() {
 const guess = parseInt(guessInput.value);

 if (!guess || guess < 1 || guess > 10) {
    guessMessage.textContent = "Please enter a number between 1 and 10";
    return;
 }

 
  
 attempts++;
 history.push(guess);
 currentGuess.textContent = guess;
 guessHistory.textContent = history.join(", ");

 if (guess === randomNumber){
    guessMessage.textContent = "You win!"
    computerGuess.textContent = randomNumber;
    endGame();
 }
 else if (attempts === maxAttempts) {
    guessMessage.textContent = "You've run out of attempts.";
    computerGuess.textContent = randomNumber;
    endGame();
 }
 else if (guess < randomNumber){
    guessMessage.textContent = "Too low. Try again.";
 }
 else  {
    guessMessage.textContent = "Too high. Try again.";
 }
 

guessInput.value = "";
 }


 function endGame() {
    submitBtn.disabled = true;
    restartBtn.disabled = false;
    guessInput.disabled = true;
 }

 function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    history = [];
    guessInput.value = "";
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "";
    guessHistory.textContent = "";
    submitBtn.disabled = false;
    restartBtn.disabled = true;
    guessInput.disabled = false;
}







submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);