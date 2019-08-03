var express = require('express');
var router = express.Router();


const messages = [ { text: 'Hi there!', user: 'Amando', added: new Date() }, { text: 'Hello World!', user: 'Charles', added: new Date() } ];

/* GET home page. */
router.get('/', function(req, res, next) {
  

  res.render('index', { title: 'Mini Messageboard', messages: messages });
});


router.post('/new', function(req,res, next){
  let msg = {text: req.body.msg, user: req.body.username, added: new Date() };
  messages.push(msg);

  res.redirect('/'); 

});

module.exports = router;
