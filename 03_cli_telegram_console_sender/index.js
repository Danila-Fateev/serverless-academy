const TelegramBot = require("node-telegram-bot-api");
const { Command } = require("commander");
const program = new Command();

program
  .command("send-message <text>")
  .description("Sends a message")
  .action((msg) => {
    console.log(msg);
  });

program
  .command("send-photo <path>")
  .description("Sends a photo")
  .action((path) => {
    console.log(path);
  });

program.parse();
