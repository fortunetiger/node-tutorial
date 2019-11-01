var express = require('express');
var router = express.Router();
var postSchema = require('../DB/schema.js');

/* GET home page. */
router.get('/:_id', function(req, res, next) {

    var objID = req.params._id;
    console.log(objID);
    postSchema.findById(objID, function(err){

        if(err) console.error(err);
        
    }).then((data) =>{

        console.log('')
        res.render( 'post', { post : data });

    });
});

module.exports = router;