var express = require('express');
var router = express.Router();
var postSchema = require('../DB/schema.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('edit', { title: 'Edit' });
});

/* 글 작성 */
router.post('/write', function(req, res, next) {
    
    var post = {
                    "title" : String(req.body.title),
                    "contents" : String(req.body.contents),
                    "writer" : String(req.body.writer),
                    "created" : Date.now(),
                    "updated" : Date.now()
                };

    // console.log(postSchema.db);

    var doc = new postSchema(post);
    doc.save(function (err){
        console.log(err);
    });

    res.redirect('/');

  });

module.exports = router;