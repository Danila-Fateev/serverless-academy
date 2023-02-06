const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const lat = "49.8383";
const lon = "24.0232";
const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getWeather() {
  const fetchedData = await axios.get(URL);
  const { weather, main, wind, name } = fetchedData.data;
  const text = `${name} forecast:
  Weather: ${weather.main},
    Temperature: ${main.temp},
    Feels like: ${main.feels_like},
    Wind speed: ${wind.speed}`;
  return text;
}

bot.onText(/\/weather/, async (msg) => {
  const chatId = msg.chat.id;
  const weatherMessage = await getWeather();

  bot.sendMessage(chatId, weatherMessage);
});
