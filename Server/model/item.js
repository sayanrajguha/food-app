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