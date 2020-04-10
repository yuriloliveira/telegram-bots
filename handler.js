"use strict";
const TelegramBotApi = require("node-telegram-bot-api");

const {
  TELEGRAM_REMINDING_GURU_BOT_TOKEN,
  DAILY_REMINDER_CHAT_ID,
} = require("./config.js");

const telegramBot = new TelegramBotApi(TELEGRAM_REMINDING_GURU_BOT_TOKEN);

module.exports.dailyReminder = async (event, context) => {
  try {
    const message =
      "<b>Hora da Daily!</b>\n" +
      "Chegou a hora mais aguardada do dia!\n" +
      "Envie uma mensagem de texto ou áudio descrevendo o que fez ontem e o que planeja fazer hoje.\n" +
      "<u>Importante: Lembre-se de colocar o prefixo <b>[Daily]</b> no início da mensagem (ou antes do áudio)</u>\n" +
      "🏁 Está dada a largada 🏁";

    await telegramBot.sendMessage(DAILY_REMINDER_CHAT_ID, message, {
      parse_mode: "HTML",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Daily reminder successfully sent!",
        input: event,
      }),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
