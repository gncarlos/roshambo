#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: --move <move>")
 .option("--move", { alias: "move", describe: "Your move", type: "string", demandOption: true })
 .argv;

// input from user
var move = options.move
if (move !== 'rock' && move !== 'paper' && move !== 'scissor'){
    throw 'that is NOT a correct choice'
    // exit code
}

console.log(`Playing a game of Roshambo against the computer.`)
console.log(`Player plays ${move}`)

var computerChoice = Math.floor(Math.random() * 3) + 1
if (computerChoice ===1) {
    computerChoice = 'rock'
} else if (computerChoice ===2){
    computerChoice = 'paper'
} else {
    computerChoice = 'scissor'
}
console.log(`Computer plays ${computerChoice}`)

if (move === computerChoice) {
  console.log(`it's a tie!`)
} else if( (move === 'rock' && computerChoice === 'paper') || (move === 'paper' && computerChoice === 'scissor') || (move === 'scissor' && computerChoice === 'rock')) {
    console.log(`Computer wins!`)
} else {
    console.log(`Player wins!`)
}