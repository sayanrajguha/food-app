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

module.exports.createFeedback = function(newFeedback, callback) {
  newFeedback.save(callback);
}

module.exports.getFeedback = function(id,callback) {
  Feedback.findById(id, callback);
}

module.exports.updateFeedback = function(id,newFeedback,callback) {
  Feedback.getFeedback(id, function(err,feedback) {
    if(err) throw err;
    if(!feedback) callback(null,false);
    else {
      console.log('Found feedback with id '+feedback._id);
      feedback.subject = newFeedback.subject;
      feedback.body = newFeedback.body;
      feedback.isRead = newFeedback.isRead;
      
      feedback.save(callback);
    }
  });
}

module.exports.removeFeedback = function(id, callback) {
  Feedback.remove({ _id : id }, callback);
}

module.exports.getAllFeedbacks = function(callback) {
  Feedback.find({},null,null, callback);
}

module.exports.getFeedbackByUser = function(userID, callback) {
  Feedback.find({userID : userID}, null, null, callback);
}