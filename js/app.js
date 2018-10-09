'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

var answerOne = prompt('Do I like to play video games?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    //Tell them! 
    alert('Ding Ding Ding! You bet I do.');
    //console.log result
    console.log('The user got Question 1 right.');
} else {
    //Tell them!
    alert('Well you\'re wrong... so...')
    //console.log result
    console.log('The user got Question 1 wrong.');
}