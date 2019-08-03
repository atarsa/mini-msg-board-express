var express = require('express');
var router = express.Router();

// helper for data format
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

const messages = [ { text: 'Hi there!', user: 'Amando', added: new Date().toLocaleDateString("en-UK", options) }, { text: 'Hello World!', user: 'Charles', added: new Date().toLocaleDateString("en-UK", options) } ];

/* GET home page. */
router.get('/', function(req, res, next) {
  

  res.render('index', { title: 'Mini Messageboard', messages: messages });
});


router.post('/new', function(req,res, next){
  let msg = {text: req.body.msg, user: req.body.username, added: new Date().toLocaleDateString("en-UK", options) };
  messages.push(msg);

  res.redirect('/'); 

});

module.exports = router;
