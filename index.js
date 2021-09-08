require('dotenv').config()
const BotFactory = require("./bots/bot-factory")
(function() {
  

  const bot = BotFactory.build()
  bot.start()
})()
