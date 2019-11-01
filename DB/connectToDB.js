var mongoose = require('mongoose');
var DB = {};

var uri = 'mongodb://localhost:27017/node-example';
var opt = { useNewUrlParser:true };

DB.init = function(app){
    console.log('connect to DB...')
    
    mongoose.connect(uri, opt);
    DB.connection = mongoose.connection;
    DB.connection.on('error',
        console.error.bind(console,"[database] DB connection error occurred")
    );
    
    DB.connection.once('open', function(){
        console.log('[database] connected to %s successfully', uri);
        app.set(DB);
    });
}

module.exports = DB;