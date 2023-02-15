const TelegramBot = require("node-telegram-bot-api");
const { Command } = require("commander");
const program = new Command();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const chatId = process.env.CHAT_ID;

program
  .command("send-message <text>")
  .description("Sends a message")
  .action((msg) => {
    bot.sendMessage(chatId, msg);
  });

program
  .command("send-photo <path>")
  .description("Sends a photo")
  .action((path) => {
    bot.sendPhoto(chatId, path);
  });

program.parse();
