'use strict';

var request = require('superagent');

module.exports = function(type) {
  return new Promise( (resolve, reject) => {

    request
      .get('http://api.randomuser.me/')
      .end( (err, res) => {
        if (err)
          reject(err);

        let data = JSON.parse(res.text).results[0];

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
