var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  userID : {
    type : String,
    required : true
  },
  creationTime : {
    type : String,
    required : true
  },
  status : String,
  delivery : {
          date : String,
          timeSlot : String,
          addressID : String
  },
  discount : {
        couponID : String,
        discount : Number
  },
  isRead : Boolean,
  totalPay : Number,
  netPay : Number,
  paymentID : Number,
  otc : String,
  items : [
    {
        itemID : String,
        quantity : String,
        rate : Number,
        amount : Number    
    }]
  }
);

var Order = module.exports = mongoose.model('Order',OrderSchema);