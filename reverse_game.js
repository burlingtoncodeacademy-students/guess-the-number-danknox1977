// --------------------------------GloabalFunctions------------------------------------------------------ //
const maxGuesses = 7
const downnum = 0
const upnum = 100



function getRandInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // for (let i = 0; i < 500; i++) {
  //   console.log(getRandInt(40,60))
  // }




const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// --------------------------------MainCode------------------------------------------------------ //
start();

  async function start() {
    //Player Game choice *Ice Box
  
    console.log(
      "Let's play a game where I (computer) make up a number and you (human) try to guess it."
    );
    //Player option expand Range
    var custRange = await ask(
      "To start, choose a number greater than 1 to be the upper limit: "
    );
    console.log(custRange);
    
    // highRange = custRange;
    possRange.splice(1, 1, custRange);
    

    // Computer Chooses Random Number

    const secretNumber = getRandInt(downnum, upnum);
    secretNumber = parseInt(secretNumber);

    //if statement to keep number in range
    if (secretNumber !== 0 && secretNumber <= custRange) {
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
            if (currentGuess > secretNumber) {
              console.log(
                "You may have wasted you guess, please keep better track of the Secret Number"
              );
            } else {
              previousGuess.push([">", currentGuess]);
              lowRange = currentGuess;
              possRange.splice(0, 1, currentGuess);
              // var currentGuess = Math.round((highRange - lowRange) / 2 + lowRange);
            }
            //else statement for lower option
          } else {
            //Cheat Detection -- if hi lo choice contradicts earlier user input
            if (currentGuess < secretNumber) {
              console.log(
                "You may have wasted you guess, please keep better track of the Secret Number"
              );
            } else {
              previousGuess.push("<", currentGuess);
              custRange = currentGuess;
              possRange.splice(1, 1, currentGuess);
              // var currentGuess = Math.round((highRange - lowRange) / 2 + lowRange);
            }
          }
        }
      }
    } else {
      console.log(
        `Please pick a number between ${lowRange + 1} and ${custRange}`
      );
      start();
    }
  process.exit();

// --------------------------------GloabalFunctions------------------------------------------------------ //






}
