'use strict';

var request = require('superagent');

module.exports = function(type, use_http) {
  let protocol = 'https://';
  if (use_http) protocol = 'http://';
  
  return new Promise( (resolve, reject) => {

    request
      .get(protocol + 'api.randomuser.me/')
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
