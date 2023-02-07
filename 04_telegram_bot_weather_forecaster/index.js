const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const lat = "49.8383";
const lon = "24.0232";
const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getWeather() {
  const fetchedData = await axios.get(URL);
  const { weather, main, wind, name } = fetchedData.data;
  const text = `${name} forecast:
  Weather: ${weather[0].main},
    Temperature: ${Math.floor(main.temp)}°C,
    Feels like: ${Math.floor(main.feels_like)}°C,
    Wind speed: ${wind.speed} m/s`;
  return text;
}

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome!", {
    reply_markup: {
      keyboard: [["Forecast in Lviv"]],
    },
  });
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const weatherMessage = await getWeather();
  if (msg.text === "Forecast in Lviv") {
    bot.sendMessage(chatId, "Choose an option:", {
      reply_markup: {
        keyboard: [["Forecast for 3 hours"], ["Forecast for 6 hours"]],
      },
    });
  }

  if (msg.text === "Forecast for 3 hours") {
    bot.sendMessage(chatId, "Forecast for THREE HOURS");
  }
  if (msg.text === "Forecast for 6 hours") {
    bot.sendMessage(chatId, "Forecast for SIX HOURS");
  }
});

async function getForecast() {
  const info = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=3&appid=${apiKey}&units=metric`
  );
  info.data.list.map((el) => {
    const time = new Date(el.dt_txt);
    // console.log(el);
    console.log(time.toString());
  });
}

getForecast();
