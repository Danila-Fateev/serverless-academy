const TelegramBot = require("node-telegram-bot-api");
const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const axios = require("axios");
const currencyURL =
  "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
const lat = "49.8383";
const lon = "24.0232";
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=${apiKey}&units=metric`;

async function getForecast() {
  const fetchedData = await axios.get(URL);
  const {
    city: { name },
  } = fetchedData.data;
  const forecast = fetchedData.data.list.map((el) => {
    const { weather, main, wind, dt_txt } = el;
    const time = new Date(dt_txt);
    const text = `${time.toLocaleString()}
                  ${name} forecast:
                  Weather: ${weather[0].main},
                  Temperature: ${Math.floor(main.temp)}°C,
                  Feels like: ${Math.floor(main.feels_like)}°C,
                  Wind speed: ${wind.speed} m/s
    
    `;

    return text;
  });

  return forecast;
}

async function getExchangeRates() {
  const fetchedData = await axios.get(currencyURL);

  const rates = fetchedData.data.map(
    (el) =>
      `${el.ccy} Buy: ${Number(el.buy).toFixed(1)} Sell: ${Number(
        el.sale
      ).toFixed(1)}`
  );

  return rates;
}

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Welcome!", {
    reply_markup: {
      keyboard: [["Forecast in Lviv"], ["Exchange rates"]],
    },
  });
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const weatherMessage = await getForecast();
  const ratesMessage = await getExchangeRates();
  if (msg.text.toLowerCase() === "forecast in lviv") {
    bot.sendMessage(chatId, "Choose an option:", {
      reply_markup: {
        keyboard: [
          ["Forecast for 3 hours", "Forecast for 6 hours"],
          ["Go back"],
        ],
      },
    });
  }

  if (msg.text.toLowerCase() === "exchange rates") {
    bot.sendMessage(chatId, "Choose an option:", {
      reply_markup: {
        keyboard: [["EUR", "USD"], ["Go back"]],
      },
    });
  }

  if (msg.text.toLowerCase() === "eur") {
    bot.sendMessage(chatId, ratesMessage[0]);
  }
  if (msg.text.toLowerCase() === "usd") {
    bot.sendMessage(chatId, ratesMessage[1]);
  }

  if (msg.text.toLowerCase() === "forecast for 3 hours") {
    bot.sendMessage(chatId, weatherMessage.join(""));
  }
  if (msg.text.toLowerCase() === "forecast for 6 hours") {
    const sixHours = weatherMessage.filter((el, index) => index % 2 === 0);
    bot.sendMessage(chatId, sixHours.join(""));
  }

  if (msg.text.toLowerCase() === "go back") {
    bot.sendMessage(chatId, "Choose an option:", {
      reply_markup: {
        keyboard: [["Forecast in Lviv"], ["Exchange rates"]],
      },
    });
  }
});
