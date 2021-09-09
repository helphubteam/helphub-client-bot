import dotenv from 'dotenv'
dotenv.config()
import BotFactory from "./bots/bot-factory.js"
(function() {
  

  const bot = BotFactory.build()
  bot.start()
})()
