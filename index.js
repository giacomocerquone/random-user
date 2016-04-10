'use strict';

var request = require('superagent');

module.exports = function(type) {
  return new Promise( function(resolve, reject) {

    request
      .get('http://api.randomuser.me/')
      .end(function(err, res) {
        if (err)
          reject(err);

        var data = JSON.parse(res.text).results[0];

        if (type === 'simple') {
          resolve({
            firstName: data.name.first,
            lastName: data.name.last,
            email: data.email,
            username: data.login.username,
            password: data.login.password
          });
        } else {
          resolve(data);
        }

      });
  });
};
