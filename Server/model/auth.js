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

// module.exports.comparePassword = function(userPassword, hash, callback) {
//   bcrypt.compare(userPassword, hash, function(err, isMatch) {
//     if(err) callback(err,false);
//     callback(null,isMatch);
//   })
// }