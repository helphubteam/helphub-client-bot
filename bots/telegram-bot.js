const { Telegraf } = require('telegraf')
const BotInterface = require("./bots/bot-interface")

class TelegramBot extends BotInterface {
  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
    // Enable graceful stop
    process.once('SIGINT', () => this.stop('SIGINT'))
    process.once('SIGTERM', () => this.stop('SIGTERM'))
  }
  start(handler) {
    return this.bot.start(handler)
  }
  on(options) {
    return this.bot.on(...options)
  }
  hears(options){ 
    return this.bot.hears(...options)
  }
  launch() {
    this.bot.launch()
  }
  help(handler) {
    bot.help(handler)  
  }
  stop(message) {
    this.bot.stop(message)
  }
}

export default TelegramBot;
