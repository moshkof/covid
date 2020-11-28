const Telegraf = require("telegraf");
const covidService = require("./services/covid");
const formatCountryMsg = require("./messages/country");
const formatNewsMsg = require("./messages/newses");
const covidNews = require("./services/news");
// const axios = require("axios");

const BOT_TOKEN =
  process.env.BOT_TOKEN || "1263311682:AAEMiSiUxm_aokOS7qfVbE7Nopn3zxpC_ms";

const bot = new Telegraf(BOT_TOKEN);

// commands
// start, help
bot.start((ctx) =>
  ctx.reply(
    `Добро пожаловать в бот COVID-19!
    Здесь вы можете получить информацию о заболеваемости по странам.
    Наберите команду /help, для получения справки.
    `
  )
);

bot.help((ctx) =>
  ctx.reply(
    `
    Можно ввести любую страну на английском языке, по образцу:
    Russia
    Ukraine
    China
    `
  )
);

// handlers
bot.hears("/news", async (ctx) => {
  const { data } = await covidNews.getByNews(ctx.message.text);
  // console.log(data);

  return ctx.reply(
    formatNewsMsg(
      data.articles[Math.floor(Math.random() * data.articles.length)]
    )
  );
});

bot.hears(/.*/, async (ctx) => {
  const { data } = await covidService.getByCountry(ctx.message.text);

  if (data.results === 0) {
    return ctx.reply("Правильно вводите страну!");
  }

  return ctx.replyWithMarkdown(formatCountryMsg(data.response[0]));

});

// launch
bot
  .launch()
  .then((res) => {
    const date = new Date();
    // console.log(`Bot launch at ${date}`);
  })
  .catch((err) => console.log(err.message));
