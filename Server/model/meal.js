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

module.exports.createMeal = function(newMeal, callback) {
  newMeal.save(callback);
}

module.exports.getMeal = function(id, callback) {
  Meal.findById(id, callback);
}

module.exports.updateMeal = function(id, newMeal, callback) {
  Meal.getMeal(id, function(err, meal) {
    if(err) throw err;
    if(!meal) callback(null,false);
    else {
      meal.name = newMeal.name;
      meal.imgPath = newMeal.imgPath;
      meal.description = newMeal.description;
      meal.type = newMeal.type;
      meal.price = newMeal.price;
      meal.category = newMeal.category;
      meal.details = newMeal.details;
      meal.items = newMeal.items;
      
      meal.save(callback);
    }
  });
}

module.exports.removeMeal = function(id, callback) {
  Meal.remove({_id : id}, callback);
}

module.exports.getAllMeals = function(callback) {
  Meal.find({},null,null,callback);
}