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