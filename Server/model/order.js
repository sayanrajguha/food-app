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

module.exports.createOrder = function(newOrder, callback) {
  Order.save(callback);
}

module.exports.getOrder = function(id, callback) {
  Order.findById(id, callback);
}

module.exports.updateOrder = function(id, newOrder, callback) {
  Order.getOrder(id, function(err, order) {
    if(err) throw err;
    if(!order) callback(null,false);
    else {
      order.creationTime = newOrder.creationTime;
      order.status = newOrder.status;
      order.delivery = newOrder.delivery;
      order.discount = newOrder.discount;
      order.isRead = newOrder.isRead;
      order.totalPay = newOrder.totalPay;
      order.netPay = newOrder.netPay;
      order.paymentID = newOrder.paymentID;
      order.otc = newOrder.otc;
      order.items = newOrder.items;
      
      order.save(callback);
    }
  });
}

module.exports.removeOrder = function(id, callback) {
  Order.remove({_id : id}, callback);
}

module.exports.getAllOrders = function(callback) {
  Order.find({},null,null,callback);
}

module.exports.getAllOrdersByUser = function(userID, callback) {
  Order.find({userID : userID},null,null,callback);
}