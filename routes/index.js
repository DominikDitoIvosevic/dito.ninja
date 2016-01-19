var express = require('express');
var router = express.Router();

router.post('/postscore', function(req, res, next) {
    console.log("posting");
    console.log(req);
    if (next) next();
});

router.get('/postscore', function(req, res, next) {
    console.log("getting");
    console.log(req);
    if (next) next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Dito's laboratory" });
});


module.exports = router;
