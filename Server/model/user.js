//var mongoosePaginate = require('mongoose-paginate');
//var bcrypt = require('bcryptjs');
//var config = require('../config/config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  contact : {
    type : Number,
    required : true
  },
  firstName : {
    type : String,
    required : true
  },
  lastName : String,
  addresses : [{
                type : String,
                address1 : String,
                address2 : String,
                landmark : String,
                city : String,
                state : String,
                pincode : Number,
                lat : Number,
                lng : Number
  }],
  referralID : String,
  profileImgPath : String,
  socialMeta : {
                fb_id : String,
                gmail_id : String
  }
  }
);

var User = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser, callback) {
  newUser.save(callback);
}
module.exports.getUser = function(id, callback) {
  User.findById(id,callback);
}
// module.exports.getUserByEmail = function(email, callback) {
//   var query = {email : email};
//   User.findOne(query,callback);
// }


module.exports.updateUser = function(id,newUser,callback) {
  User.getUser(id, function(err,user) {
    if(err) throw err;
    if(!user) {
      callback(null,false);
    }
    console.log('user with email : ' + user.email + ' found');
    user.email = newUser.email;
    user.contact = newUser.contact;
    user.firstName = newUser.firstName;
    user.lastName = newUser.lastName;
    user.addresses = newUser.addresses;
    user.referralID = newUser.referralID;
    user.profileImgPath = newUser.profileImgPath;
    user.socialMeta = newUser.socialMeta;

    user.save(callback);
  });
}

module.exports.removeUser = function(id,callback) {
  User.remove({ _id : id },callback);
}

module.exports.getAllUsers = function(callback) {
  User.find({},null,null, callback);
}


