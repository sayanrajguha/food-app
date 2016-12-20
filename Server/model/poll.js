var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  list : [{
    categoryName : String,
    items : [{
        itemID : String,
        value : Number
    }]
  }]
  }
);

var Poll = module.exports = mongoose.model('Poll',PollSchema);