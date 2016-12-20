var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
  imgPath : String,
  status : {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  description : String,
  hasCode : {
      type : Boolean,
      required : true
  },
  couponCode : String,
  startDate : String,
  endDate : String,
  creationDate : String
 }
);

var Offer = module.exports = mongoose.model('Offer',OfferSchema);