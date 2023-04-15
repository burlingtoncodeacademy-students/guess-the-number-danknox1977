




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

start();

async function start() {
  console.log("Let's play a game where I (computer) make up a number and you (human) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();
}