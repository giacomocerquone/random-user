const randomUser = require('../index.js');

randomUser()
  .then(person => {
    console.log(person);
  })
  .catch(err => {
    console.error(err);
  })
