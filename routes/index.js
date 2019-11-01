var express = require('express');
var router = express.Router();
var postSchema = require('../DB/schema.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  postSchema.find(
    {},                                 // conditions
    {title:1, writer:1, created:1},     // projections
    function(err){                      // error callback
        console.error(err);
  }).then((data) => {
    res.render('index', { title: 'Board', posts : data });
  });
  
});

module.exports = router;
