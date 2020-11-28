const countryEmoji = require('country-emoji');
module.exports = (data) => {
  return `
  Страна: *${data.country}* ${countryEmoji.flag(data.country) || ''}
  Население: *${data.population}*
  Новые случаи: *${data.cases.new}*
  Активные: *${data.cases.active}*
  Вылечилось: *${data.cases.recovered}*
  Умерло: *${data.deaths.total}*
  Проведено тестов: *${data.tests.total}*
  ------------
  Всего заболевших: *${data.cases.total}*
  `;
};
