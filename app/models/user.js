var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



// var User = db.Model.extend({
// 	tableName: 'users',
// 	hasTimeStamp: true 

// });

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },
  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });

      var pass=this.get('password')
      // bcrypt.hash
  }
 });
module.exports = User;