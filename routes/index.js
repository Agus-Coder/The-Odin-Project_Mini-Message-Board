const express = require("express");
const messages = require("../public/javascripts/messages");
const router = express.Router();
const moment = require('moment');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    title: req.body.title,
    text: req.body.text,
    user: req.body.user,
    added: moment()
      .startOf('hour' - 1)
      .fromNow(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
});




module.exports = router;
