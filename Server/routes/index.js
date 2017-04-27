var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:filename', function(req, res, next) {
  let rootPath = __dirname.split('/routes')[0] + '/public/images/';
  let options = {
    root: rootPath,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile(req.params.filename , options, function(err){
    if(err)
      console.log(err)
  });
});

module.exports = router;
