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

module.exports.createPoll = function(newPoll, callback) {
  Poll.save(callback);
}

module.exports.getPoll = function(id, callback) {
  Poll.findById(id, callback);
}

module.exports.updatePoll = function(id, newPoll, callback) {
  Poll.getPoll(id, function(err, poll) {
    if(err) throw err;
    if(!poll) callback(null,false);
    else {
      poll.list = newPoll.list;
      
      poll.save(callback);
    }
  });
}

module.exports.removePoll = function(id, callback) {
  Poll.remove({_id : id}, callback);
}

module.exports.getAllPolls = function(callback) {
  Poll.find({},null,null,callback);
}

// module.exports.addVote = function(id, callback) {
  
// }