const inquirer = require ("inquirer")
const questions = [
  {
      type: "input",
      message: "What is your Github username?",
      name: "Github"
  },


  {
      type: "list",
      message: "what is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "pink"]
  }
];

function writeToFile(fileName, data) {
 
}

function init() {

init();
