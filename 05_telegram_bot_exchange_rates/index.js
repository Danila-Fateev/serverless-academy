const NodeCache = require("node-cache");
const myCache = new NodeCache();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
const URL = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
