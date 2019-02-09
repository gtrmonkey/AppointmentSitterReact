var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport')(passport);
var EventDates = require('../models/EventDates.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

router.get('/all', function (req,res){
  EventDates.find({})
  .then(allData => res.json(allData) )
  .catch(err => res.json(err))
})

router.post('/', function(req, res) {
  console.log("this is my event post route")
  // var token = getToken(req.headers);
  // if (token) {
  //   EventDates.create(req.body, function (err, post) { 
  //     if (err) return next(err);
  //     res.json(post);
  //   });
  // } else {
  //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
  // }
  EventDates.create(req.body, function (err, post) { 
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/', function(req, res) {
var token = getToken(req.headers);
if (token) {
  EventDates.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;