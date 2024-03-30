#! /usr/bin/env node
const randomNumber = Math.floor(Math.random() * 6 + 1);
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === "randomNumber") {
    console.log("congratulations! you gussed right number.");
}
else {
    console.log(" you gussed wrong number");
}
