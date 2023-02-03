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
    name: "showDB",
    message: "Would you like to search values in DB? ",
    default: false,

    when(answers) {
      return answers.userName == false;
    },
  },
];

function interactWithDB() {
  inquirer
    .prompt(questions)
    .then(async (answers) => {
      const data = await fs.readFile("./db/users.txt");
      const parsedData = JSON.parse(data.toString("utf-8"));
      if (answers.showDB) {
        console.log(parsedData);
      }
      if (!answers.showDB) {
        const { userName, gender, age } = answers;
        const newData = [...parsedData, { userName, gender, age }];
        await fs.writeFile(
          "./db/users.txt",
          JSON.stringify(newData, null, "  ")
        );
      }
      interactWithDB();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

interactWithDB();
