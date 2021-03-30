var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').Double;
var url = "mongodb://localhost:27017/";

router.get('/count/:id', function (req, res){
    var id = ObjectID(req.params.id)
    MongoClient.connect(url, function(err, db){
        if(err) throw res.send(err)
        var dbo = db.db('local');
        dbo.collection('Contas').findOne({ID: id}, function(err, obj){
            if(err) throw res.send(err)
            return res.send(obj)
        })
           
     
    })
})

module.exports = router;