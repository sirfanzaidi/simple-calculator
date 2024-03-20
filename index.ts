#! /usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
const answer = await inquirer.prompt([
  { massage: "enter your first number", type: "number", name: "firstNumber" },
  { massage: "enter your second number", type: "number", name: "secondNumber" },
  {
    massage: "select one of the operators from action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtration", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtration") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select valid operator");
}
console.log ("the end");