const TelegramBotApi = require("node-telegram-bot-api");

const { TELEGRAM_REMINDING_GURU_BOT_TOKEN } = require("../config");

const telegramBot = new TelegramBotApi(TELEGRAM_REMINDING_GURU_BOT_TOKEN);

telegramBot
  .getUpdates()
  .then((updates) => console.log(JSON.stringify(updates)));
