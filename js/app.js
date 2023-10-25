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

let finalMessage = alert("Hope you enjoyed the guessing game " + userName + "! Come back soon to check for updates!");

// alert(finalMessage);