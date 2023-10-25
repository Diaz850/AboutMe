'use strict';

// let userName = prompt('Hello! What is your name?');
// alert('Welcome! ' + userName + ', Thanks for checking out my page!')


function question1() {
  let location = prompt('Where am I from?').toLowerCase();
  if (location === 'florida') {
    alert('Correct!');
    console.log('Correct!');
  } else {
    alert('Wrong!');
    console.log('Wrong!');
  }
}
question1();

function question2(){
  let military = prompt('Was I a member of the United States Navy?').toUpperCase();
  if (military === 'yes') {
    alert('Correct!');
    console.log('Correct!');
  } else {
    alert('Nope! Try the opposite answer next time!')
    console.log('Nope! Try the opposite answer next time!')
  }
}
question2()

function question3(){
  let pet = prompt('Do I have a dog named Osita?');
  if(pet === 'yes'){
    alert('That is right!')
    console.log('That is right!')
  } else{
    alert('Try again next time!')
    console.log('Try again next time!')
  }
}
question3();

function question4(){
  let police = prompt('Did I ever pursue a career in Law Enforcement?');
  if (police === 'yes'){
    alert('Yeah!')
    console.log('Yeah!')
  } else{
    alert('You must have not read my about me!');
    console.log('You must have not read my about me!');
  }
}
question4();

function question5(){
  let weld = prompt('Am I a certified welder?')
  if (weld === 'yes'){
    alert('Thats right! Theres not a gap I cant fill!');
    console.log('Thats right! Theres not a gap I cant fill!')
  } else {
    alert('Come on! You barely know me!');
    console.log('Come on! You barely know me!');
  }
}
question5();
// let finalMessage = prompt("Hope you enjoyed the page " + userName + "! Come back soon to check for updates!");

// prompt(finalMessage);