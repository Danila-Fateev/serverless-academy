const inquirer = require("inquirer");
const fs = require("fs/promises");

const questions = [
  {
    type: "input",
    name: "userName",
    message: "Enter the user's name. To cancel press ENTER: ",
    default: "",
  },
  {
    type: "list",
    name: "gender",
    message: "Choose your GENDER. ",
    choices: ["male", "female"],
    when(answers) {
      return answers.userName != false;
    },
  },
  {
    type: "number",
    name: "age",
    message: "Enter your age: ",
    default: "",
    filter(answer) {
      return `${answer}`;
    },
    validate(answer) {
      if (!Number(answer)) {
        return "Please, enter a number!";
      }
      return true;
    },
    when(answers) {
      return answers.userName != false;
    },
  },
  {
    type: "confirm",
    name: "searchValues",
    message: "Would you like to search values in DB? ",
    default: false,

    when(answers) {
      return answers.userName == false;
    },
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
