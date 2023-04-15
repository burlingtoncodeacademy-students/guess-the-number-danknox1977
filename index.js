//establish global vaiables
//number floor & ceiling for guessing game & set maxGuesses for while loop

var upnum = 100;
var downnum = 0;
const maxGuess = 10000;

//variables for keeping track of guesses
var lowRange = downnum;
var custRange = 1;
let possRange = [lowRange, custRange];
let previousGuess = [];
//setting guesses to 0
var guesses = 0;
var secretNumber = (1);

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  

  //Player Game choice *Ice Box

  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  //Player option expand Range
  var custRange = await ask(
    "To start, choose a number greater than 1 to be the upper limit: "
  );
  console.log(custRange);
  // highRange = custRange;
  possRange.splice(1, 1, custRange);
  var secretNumber = await ask(
    "For security purposes only,\nWhat is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("**whisper** You entered: " + secretNumber);
  // Now try and complete the program.
  
  //if statement to keep number in range
  if (secretNumber != 0 && secretNumber <= custRange) {
    //establish while loop to continue as long as there are remaining guesses

    while (guesses < maxGuess) {
      guesses = guesses + 1;
      console.log(custRange);
      console.log(lowRange);
      var currentGuess = Math.round(
        (possRange[1] - possRange[0]) / 2 + possRange[0]
      );

      console.log(`Current Range ${possRange}`);
      console.log(`Previous Guesses ${previousGuess}`);
      console.log(`Current Guess Count: ${guesses}`);
      const yanswr = await ask(`Is your number ${currentGuess}? (y or n) `);

      //if statement for currentGuess y
      if (yanswr.toLowerCase() === "y") {
        console.log(`Your number was ${currentGuess}! `);
        console.log(currentGuess == secretNumber);
        console.log(`Current Guess Count: ${guesses}`);
        console.log(`Current Range ${possRange}`);
        console.log(`Previous Guesses ${previousGuess}`);
        process.exit();
      } else {
        const hanswr = await ask(
          `Press \'h\' If your number is higher\nPress \'l\' If your number is lower `
        );
        //if statment for higher option
        if (hanswr.toLowerCase() === "h") {
          //Cheat Detection -- if hi lo choice contradicts earlier user input
          if {
            previousGuess.includes(['>', currentGuess]) == true;
            console.log('You may have wasted you guess, please keep better track of the Secret Number')
          }
          else {
          previousGuess.push(['>', currentGuess]);
          lowRange = currentGuess;
          possRange.splice(0, 1, currentGuess);
          // var currentGuess = Math.round((highRange - lowRange) / 2 + lowRange);
          }
        //else statement for lower option
        }
        else {
          //Cheat Detection -- if hi lo choice contradicts earlier user input
          if {
            previousGuess.includes(['>', currentGuess]) == true;
            console.log('You may have wasted you guess, please keep better track of the Secret Number')
          }
          else {
          previousGuess.push('<', currentGuess);
          custRange = currentGuess;
          possRange.splice(1, 1, currentGuess);
          // var currentGuess = Math.round((highRange - lowRange) / 2 + lowRange);
          }
        }
    }
  } else {
    console.log(
      `Please pick a number between ${lowRange + 1} and ${custRange}`
    );
    start();
  }
}
