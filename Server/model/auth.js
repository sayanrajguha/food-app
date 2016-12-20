var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthSchema = new Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  contact : {
    type : Number,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  token : String
  }
);

var Auth = module.exports = mongoose.model('Auth',AuthSchema);