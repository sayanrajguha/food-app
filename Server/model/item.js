var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  imgPath : String,
  name : {
    type : String,
    required : true
  },
  contact : {
    type : Number,
    required : true
  },
  type : {
    type : String,
    required : true
  },
  category : {
      type : String,
      required : true
  },
  price : {
      type : Number,
      required : true
  },
  description : String,
  details : {
      nutrients : String,
      calories : String
  }
 }
);

var Item = module.exports = mongoose.model('Item',ItemSchema);

module.exports.createItem = function(newItem, callback) {
  newItem.save(callback);
}

module.exports.getItem = function(id, callback) {
  Item.findById(id, callback);
}

module.exports.updateItem = function(id, newItem, callback) {
  Item.getItem(id, function(err, item) {
    if(err) throw err;
    if(!item) callback(null,false);
    else {
      item.name = newItem.name;
      item.imgPath = newItem.imgPath;
      item.description = newItem.description;
      item.type = newItem.type;
      item.price = newItem.price;
      item.category = newItem.category;
      item.details = newItem.details;
      
      item.save(callback);
    }
  });
}

module.exports.removeItem = function(id, callback) {
  Item.remove({_id : id}, callback);
}

module.exports.getAllItems = function(callback) {
  Item.find({},null,null,callback);
}