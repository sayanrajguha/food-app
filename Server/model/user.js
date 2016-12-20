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

// module.exports.createUser = function(newUser, callback) {
//   bcrypt.genSalt(10, function(err, salt) {
//     if(err) callback(error,null);
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//       if(err) callback(error,null);
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }
// module.exports.getUserByEmail = function(email, callback) {
//   var query = {email : email};
//   User.findOne(query,callback);
// }
// module.exports.getUserByUsername = function(username, callback) {
//   var query = {username : username};
//   User.findOne(query,callback);
// }
// module.exports.comparePassword = function(userPassword, hash, callback) {
//   bcrypt.compare(userPassword, hash, function(err, isMatch) {
//     if(err) callback(err,false);
//     callback(null,isMatch);
//   })
// }

// module.exports.updateUser = function(username,newUser,callback) {
//   User.getUserByUsername(username, function(err,user) {
//     if(err) throw err;
//     if(!user) {
//       callback(null,false);
//     }
//     console.log('user with username : ' + username + ' found');
//     user.email = newUser.email;
//     user.firstName = newUser.firstName;
//     user.lastName = newUser.lastName;
//     user.dob = newUser.dob;
//     user.contact = newUser.contact;
//     user.socialMeta = newUser.socialMeta;

//     user.save(callback);
//   });
// }

// module.exports.deleteUser = function(username,callback) {
//   User.remove({ username: username },callback);
// }

// module.exports.changePassword = function(username, newPassword, callback) {
//   User.getUserByUsername(username, function(err,user) {
//     if(err) throw err;
//     if(!user) {
//       callback(null,false);
//     }
//     console.log('user with username : ' + username + ' found');
//     bcrypt.genSalt(10, function(err, salt) {
//       if(err) callback(error,null);
//       bcrypt.hash(newPassword, salt, function(err, hash) {
//         if(err) callback(error,null);
//         user.password = hash;
//         user.save(callback);
//       });
//     });
//   });
// }
