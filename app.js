const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1439332010:AAFBRC15eipigQmRUsRcDwGUKQCYep_Nrkc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, msg => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Welcome');
});