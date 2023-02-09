require("dotenv").config();
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const TelegramBot = require("node-telegram-bot-api");
const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const axios = require("axios");
const URL = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
