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

module.exports.createOffer = function(newOffer, callback) {
  newOffer.save(callback);
}

module.exports.getOffer = function(id, callback) {
  Offer.findById(id, callback);
}

module.exports.updateOffer = function(id, newOffer, callback) {
  Offer.getOffer(id, function(err, offer) {
    if(err) throw err;
    if(!offer) callback(null,false);
    else {
      offer.imgPath = newOffer.imgPath;
      offer.status = newOffer.status;
      offer.name = newOffer.name;
      offer.description = newOffer.description;
      offer.hasCode = newOffer.hasCode;
      offer.couponCode = newOffer.couponCode;
      offer.startDate = newOffer.startDate;
      offer.endDate = newOffer.endDate;
      offer.creationDate = newOffer.creationDate;
      
      offer.save(callback);
    }
  });
}

module.exports.removeOffer = function(id, callback) {
  Offer.remove({_id : id}, callback);
}

module.exports.getAllOffers = function(callback) {
  Offer.find({},null,null,callback);
}