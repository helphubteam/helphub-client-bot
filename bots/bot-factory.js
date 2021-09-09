import TelegramBot from "./telegram-bot.js"

const BotFactory = {
  build: function() {
    return new TelegramBot()
  }
}
export default BotFactory
