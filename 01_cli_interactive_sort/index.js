const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Hello. Enter 10 words or digits dividing them in spaces: ",
  (answer) => {
    if (answer.toLowerCase().match("exit")) {
      rl.close();
      return;
    }
    const arr = answer.split(" ");

    if (arr.length === 1) {
      console.log("You should enter more than one digit or word");
      rl.close();
      return;
    }

    rl.question(
      "1. Sort words alphabeticall 2.Show numbers from lesser to greater 3.Show numbers from bigger to smaller 4.Display words in ascending order by number of letters in the word 5.Display only unique values from the set of words and numbers. Enter a number of the option you are wanted to choose: ",
      (optiion) => {
        switch (optiion) {
          case "1":
            console.log(arr.sort((a, b) => a.localeCompare(b)).join(" "));
            break;
          case "2":
            console.log(arr.sort((a, b) => a - b).join(" "));
            break;
          case "3":
            console.log(arr.sort((a, b) => b - a).join(" "));
            break;
          case "4":
            console.log(arr.sort((a, b) => a.length - b.length).join(" "));
            break;
          case "5":
            console.log(Array.from(new Set(arr)).join(" "));
            break;
        }
        rl.close();
      }
    );
  }
);
