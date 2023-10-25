'use strict';

let userName = prompt("Hello! What is your name?");
let greetingMessage = ("Welcome! "+ userName + ", Thanks for checking out my page!")

alert(greetingMessage);

// let finalMessage = prompt("Hope you enjoyed the page," + userName + "! Come back soon to check for updates!");

// prompt(finalMessage);
let questions = [
    ' Can you count to 10?',
    ' Do you know the Alphabet? ',
    ' Do you know right from wrong?',
    ' Is there life beyond earth?',
    ' Can we be friends?',
]; 

let answers = [
    'yes','yes','no','yes','yes'
]; 

function askQuestions(){
    for (let i = 0; i < questions.length; i++) {
    let userInput = prompt(questions[i]).toLowerCase(); // Normalize input to lowercase
    if (userInput === answers[i] || userInput === "y" || userInput === "yes") {
      alert("Correct!");
    } else if (userInput === "n" || userInput === "no") {
      alert("Incorrect!");
    } else {
      alert("Invalid input. Please answer with 'yes' or 'no'.");
    }
  }

// Call the function to start asking questions
askQuestions();

}
const finalMessage = prompt("Hope you enjoyed the page " + userName + "! Come back soon to check for updates!");

alert(finalMessage);