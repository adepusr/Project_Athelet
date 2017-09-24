var express = require('express');
var router = express.Router();
var serverCfg = require('../serverCfg');
var http = require('http');
var request = require('request');
var db = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/choose')
});

router.get('/usersList', function(req, res, next) {
  var  collection = db.get().collection('users');
  collection.find({
    }).toArray(function(err, users) {
        if (err) {
            res.send(sprintf('Error when trying to fetch <br>Error message %s',err));
        } else {
            res.send(users);
        }
    })
});
router.post('/usersList', function(req, res, next) {
  let data= req.body.user;
  var  collection = db.get().collection('users');
    collection.insertOne(data, function(err) {
        if (err) {                        
            res.status(500);
            res.send("Bad format: of data");
        } else {      
            res.send("ok");
        }
    })
});

router.get('/Playerslist', function(req, res, next) {
  res.render('playersList');
});
router.get('/choose', function(req, res, next) {
  res.render('mainChoose');
});
router.get('/Register', function(req, res, next) {
  res.render('register');
});
module.exports = router;