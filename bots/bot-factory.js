const TelegramBot = require("./bots/telegram-bot")

const BotFactory = {
  build: function() {
    return new TelegramBot()
  }
}
export default BotFactory;
