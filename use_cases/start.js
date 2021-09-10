import logger from "../logger.js"
import BotFactory from "../bots/bot-factory.js"

const StartUseCase = {
  begin: function () {
    const bot = BotFactory.build()
    bot.start((ctx) => ctx.reply('Welcome to Helphub'))
    bot.launch()
    logger.info('Helphub Bot Started')
  }
};

export default StartUseCase;