'use strict';

let userName = prompt('Hello! What is your name?');
alert('Welcome! ' + userName + ', Thanks for checking out my page! Lets play a game! See if you can get the following questions right!')


function question1() {
  let location = prompt('Do I live in North Dakota?').toLowerCase();
  if (location === 'no') {
    alert('Correct! I live in the sunshine state of Florida!');
    console.log('Correct!');
  } else {
    alert('Wrong! Who would want to live there?!');
    console.log('Wrong!');
  }
}
question1();

function question2(){
  let military = prompt('Was I a member of the United States Navy?').toUpperCase();
  if (military === 'YES') {
    alert('Correct! I served 4 long years in Americas Finest Navy.');
    console.log('Correct!');
  } else {
    alert('Wrong! I did my time!')
    console.log('Nope! Try the opposite answer next time!')
  }
}
question2()

function question3(){
  let pet = prompt('Do I have a dog named Osita?').toLowerCase();
  if(pet === 'yes'){
    alert('That is right! She came with my wife as a package deal!')
    console.log('That is right!')
  } else{
    alert('Wrong! I couldnt imagine a life without her!')
    console.log('Try again next time!')
  }
}
question3();

function question4(){
  let police = prompt('Did I ever pursue a career in Law Enforcement?').toLowerCase();
  if (police === 'yes'){
    alert('Yeah! My dreams were shattered because Im colorblind!')
    console.log('Yeah!')
  } else{
    alert('Wrong! I always wanted to chase down bad guys!');
    console.log('You must have not read my about me!');
  }
}
question4();

function question5(){
  let weld = prompt('Am I a certified welder?').toLowerCase();
  if (weld === 'yes'){
    alert('Thats right! Theres not a gap I cant fill!');
    console.log('Thats right! Theres not a gap I cant fill!')
  } else {
    alert('Wrong! I started welding as a hobby and decided to master it!');
    console.log('Come on! You barely know me!');
  }
}
question5();

function question6(){
  let correctKids = 2;
  for (let turns= 0; turns < 4; turns++) {
    let kids = prompt('Guess how many kids I have?');
    let guessedKids = parseInt(kids);
    if (guessedKids === correctKids) {
      alert('That\'s right! And we are wanting more!');
      break;
    }
    else if (guessedKids < correctKids){
      alert('To low! Try again');
    } else {
      alert('To high! Try again.');
    } if (turns === 3){
      alert('You had four guesses, and the correct answer is' + correctKids + '.')
    }
  }
}
question6();

function guessMultipleAnswersQuestion(){
let possibleAnswers = ['wings', 'pizza', 'hotdog', 'corndog', 'turkeyleg', 'nachos']
let maxAttempts = 6;
let userScore = 0;
for (let attempt = 1; attempt <= maxAttempts; attempt ++){
  let guess = prompt('Guess one of my all time favorite fair foods!')
 let correctGuess = false
  for (let i=0; i < possibleAnswers.length; i++){
    if (guess === possibleAnswers[i])  {
      correctGuess = true;
      userScore++;
      break
    }
  }
  if (correctGuess) {
    alert('That\'s correct! ' + guess + ' is one of the correct answers.');
    break;
  } else if (attempt < maxAttempts) {
    alert('Not quite. You have ' + (maxAttempts - attempt) + ' tries left.');
  } else {
    alert('You\'ve run out of tries. The correct answers are: ' + possibleAnswers.join(', '));
  }
}

return userScore;
}

let totalScore = 0;

// Ask and score 7 questions
totalScore += guessMultipleAnswersQuestion();
// Add more questions as needed

// Display the final score 
alert('You got ' + totalScore + ' out of 7 questions correct.');


let finalContext = alert("Hope you enjoyed the guessing game " + userName + "! Come back soon to check for updates!");
alert(finalContext);
