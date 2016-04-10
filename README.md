# random-user

This is a module I've worked on in an hour. It's substiantally a very simple node.js wrapper for the api service made available by [randomuser.me](https://randomuser.me/).
The plan is to make a functioning client side version  of this library too (using the same code).

## Installation
#### Node.js
If you're developing an application that will run on a server just install this module from npm: `npm install random-user`

#### Client-Side JS
If you want to use this library in a client-side javascript project, you can:
1. Simply include it: `<script src="" type="text/javascript"></script>`
or
2. Require it in a JS file like you do on node and then use browserify to build the dependencies (useful if you're already doing this in your project in other modules)

# Usage
```javascript
var randomUser = require('./index.js');

randomUser('simple')
  .then( (data) => console.log(data) )
  .catch( (err) => console.log(err) );

/*
{ firstName: 'charlotte',
  lastName: 'frazier',
  email: 'charlotte.frazier@example.com',
  username: 'purplemouse814',
  password: 'zelda' }
*/

randomUser()
  .then( (data) => console.log(data) )
  .catch( (err) => console.log(err) );

/*
{ gender: 'female',
  name: { title: 'mrs', first: 'elisabeth', last: 'schäfer' },
  location:
   { street: '2629 schulstraße',
     city: 'hamm',
     state: 'rheinland-pfalz',
     postcode: 97456 },
  email: 'elisabeth.schäfer@example.com',
  login:
   { username: 'whitemouse954',
     password: 'padres',
     salt: 'SD1LQfVK',
     md5: '437b4e6e1e3c555033350aaf7cbb18cf',
     sha1: '589cda88860c7ed7308a59641597b1973b9446b8',
     sha256: '9951dfd953cc9e5d0ee5f8a2a17fd1c1254d35dedb5eb40f198a56cacc8289a9' },
  registered: 1228905903,
  dob: 737731613,
  phone: '0638-8905969',
  cell: '0176-3297406',
  id: { name: '', value: null },
  picture:
   { large: 'https://randomuser.me/api/portraits/women/24.jpg',
     medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
     thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg' },
  nat: 'DE' }
*/  
```

**[Read this if you need to import it in your angular 2 project.](https://medium.com/@s_eschweiler/using-external-libraries-with-angular-2-87e06db8e5d1#.sgaawgrcb)**

## Previous Version
Actually there was a previous version of a module on npm with the same. I contacted the owner [sotojuan](https://www.npmjs.com/~sotojuan) and he agreed very kindly to let me rewrite completely the code and publish it under the same name, just bumping the version.
