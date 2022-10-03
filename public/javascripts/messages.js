const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();
let date3 = moment().startOf('hour').fromNow();

const messages = [
    {
      title: "Presentation",
      text: "Hi there!",
      user: "Amando",
      added: date,
    },
    {
      title: "First Code",
      text: "Hello World!",
      user: "Charles",
      added: date2,
    },
    {
      title: "First Code",
      text: "Hello World!",
      user: "Charles",
      added: date3,
    },
  ];

module.exports = messages