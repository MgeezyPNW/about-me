'use strict';

alert('Welcome! Thank you for viewing my webpage. We are going to start with an ice-breaking quiz so you can get to know me!');

//Counter for right answers
var score = 0

//Prompt for username and greeting
var username = prompt('Let us start by learning YOUR name. What is your name?');
alert('Welcome, ' + username + '! Let\'s get started on the quiz!');

//Question 1
function questionOne(){
  var answerOne = prompt('Do I like to play video games?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert('Ding Ding Ding! You bet I do.');
    console.log('The user got Question 1 right.');
    score += 1
  } else {
    alert('Well you\'re wrong... so...');
    console.log('The user got Question 1 wrong.');
  }
}
questionOne();

//Question 2
function questionTwo(){
  var answerTwo = prompt('Do I enjoy Spongebob still as an adult?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Admittedly, yes... yes I do. Don\'t hate!');
    console.log('The user got Question 1 right.');
    score += 1
  } else {
    alert('Yeah... totally not a Spongebob fan... (Just kidding, I love Spongebob and you are wrong!!).');
    console.log('The user got Question 1 wrong.');
  }
}
questionTwo();

//Question 3
function questionThree(){
  var answerThree = prompt('Do I think Le\'veon Bell of the Pittsburg Steelers should sign his contract?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('Let\'s put it this way... for $800k per week I would sign just about anything.');
    console.log('The user got Question 1 right.');
    score += 1
  } else {
    alert('You are wrong! He is crushing my fantasy team this year by not playing...');
    console.log('The user got Question 1 wrong.');
  }
}
questionThree();

//Question 4
function questionFour(){
  var answerFour = prompt('Do I believe there is life in Outer Space?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Yeah. It would be hard not to believe there isn\'t.');
    console.log('The user got Question 1 right.');
    score += 1
  } else {
    alert('No. I watch far too much \'Ancient Aliens\' to not believe.');
    console.log('The user got Question 1 wrong.');
  }
}
questionFour();

//Question 5
function questionFive(){
  var answerFive = prompt('Is my fiance smarter than me?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('You are smart to say yes. She is probably listening.');
    console.log('The user got Question 1 right.');
    score += 1
  } else {
    alert('RUN. HIDE. SHE KNOWS YOU SAID THAT.');
    console.log('The user got Question 1 wrong.');
  }
}
questionFive();

//Question 6
function questionSix(){
  var correctnum = 6;

  for (var i = 0; i < 4; i++) {
    var userguess = Number(prompt('Okay, let us switch it up. You have four attempts to guess my favorite number between 1 and 20... Go!'));
    console.log(userguess);

    if (i < 3) {
      if (userguess === correctnum) {
        alert('Congratulations you got it right!');
        console.log('User got it right');
        score += 1
        break;
      } else if (userguess > correctnum) {
        if (i < 3) {
          alert('Too high! Try again!');
          console.log('User guessed too high!');
        }
      } else {
        if (i < 3) {
          alert('Too low! Try again');
          console.log('User guessed too low!')
        }
      }
      if (i === 3) {
        alert('Sorry, you ran out of tries!')
      }
    }
  }
}
questionSix();

//Question 7
function questionSeven(){
  var myCities = ['gig harbor', 'pullman'];
  var i;

  for (i = 0; i < 6; i++) {
    var userguess=prompt('Okay, this is the final question: Which two WA cities have I lived in? Hint: 1 is on the east side of the state.').toLowerCase();
  
    if (myCities.includes(userguess)) {
      alert('Wow! You know me too well. I have lived in Pullman, WA and Gig Harbor, WA');
      console.log('User got it right!')
      score += 1
      break;
    } else {
      alert('Guess again!');
      console.log('User got it wrong, trying again.');
    }
  }
}
questionSeven();

alert('You received a score of ' + score + '...');
