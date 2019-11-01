var mongoose = require('mongoose');

const meta = {
                schemaName : 'PostSchema',
                collection : 'board',
                schema : new mongoose.Schema({
                    title : { type: String , required : true },
                    contents : { type: String, required : true },
                    writer : { type : String, required : true, 'defalut' : 'migo' },
                    created : { type : Date, 'defalut': Date.now },
                    updated : { type : Date, 'defalut': Date.now }
                })
            };

module.exports = mongoose.model(meta.schemaName, meta.schema, meta.collection);