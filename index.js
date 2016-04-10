var request = require('superagent');
var q       = require('q');

var methods = {
  simple: function(rawData) {

    var simpleObject = {
      name: rawData.name.first + ' ' + rawData.name.last,
      email: rawData.email,
      username: rawData.username,
      password: rawData.password
    };

    return simpleObject;
  }
};

module.exports = function(type) {
  var deferred = q.defer();

  request
    .get('http://api.randomuser.me/')
    .end(function(err, res) {
      if (err) deferred.reject(err);

      var rawData = JSON.parse(res.text).results[0].user;

      if (methods[type]) {
        deferred.resolve(methods[type](rawData));
      } else {
        deferred.resolve(JSON.parse(res.text).results[0].user);
      }

    });

  return deferred.promise;
};
