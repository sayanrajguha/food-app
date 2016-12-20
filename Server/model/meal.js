var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  imgPath : String,
  name : {
    type : String,
    required : true
  },
  contact : {
    type : Number,
    required : true
  },
  items : [{
            itemID : String,
            quantity : String,
            rate : Number,
            amount : Number
  }],
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

var Meal = module.exports = mongoose.model('Meal',MealSchema);