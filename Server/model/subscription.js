var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
  userID : {
    type : String,
    required : true
  },
  startDate : String,
  endDate : String,
  mealDetails : {
            0 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            1 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            2 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            3 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            4 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            5 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
            6 : {
              isSelected : Boolean,
              mealID : String,
              type : String,
              amount : Number
            },
  },
  discount : String,
  totalPay : String,
  netPay : String
  }
);

var Subscription = module.exports = mongoose.model('Subscription',SubscriptionSchema);

module.exports.createSubscription = function(newSubscription, callback) {
  newSubscription.save(callback);
}

module.exports.getSubscription = function(id, callback) {
  Subscription.findById(id, callback);
}

module.exports.updateSubscription = function(id, newSubscription, callback) {
  Subscription.getSubscription(id, function(err, subscription) {
    if(err) throw err;
    if(!subscription) callback(null, false);
    else {
      subscription.startDate = newSubscription.startDate;
      subscription.endDate = newSubscription.endDate;
      subscription.mealDetails = newSubscription.mealDetails;
      subscription.discount = newSubscription.discount;
      subscription.totalPay = newSubscription.totalPay;
      subscription.netPay = newSubscription.netPay;
      
      subscription.save(callback);
    }
  });
}

module.exports.removeSubscription = function(id, callback) {
  Subscription.remove({_id : id}, callback);
}

module.exports.getAllSubscriptions = function(callback) {
  Subscription.find({},null,null,callback);
}

module.exports.getAllSubscriptionsByUser = function(userID, callback) {
  Subscription.find({userID : userID},null,null,callback);
}