var mongoose = require('mongoose');
var EventSchema = new mongoose.Schema({
    title: String,
    start: String,
    end: String,
 
  });

 module.exports = mongoose.model('EventDates', EventSchema);