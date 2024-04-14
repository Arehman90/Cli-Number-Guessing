import inquirer from "inquirer";
//  1) Computer will generate a random number. Done
//  2) User input for guessing number. Done
//  3) Compare user input with computer generated number and show result. Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number");
}
;
// if (ye condition true hai) {
//     console.log(to ye print krdo)
// } 
// else (agr false h condition ) {
//      console.log(to ye print krdo)
// }
