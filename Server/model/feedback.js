var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
  userID : {
    type : String,
    required : true
  },
  subject : {
    type : String,
    required : true
  },
  body : {
    type : String,
    required : true
  },
  isRead : Boolean
  }
);

var Feedback = module.exports = mongoose.model('Feedback',FeedbackSchema);