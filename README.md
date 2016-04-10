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
```

**[Read this if you need to import it in your angular 2 project.]**(https://medium.com/@s_eschweiler/using-external-libraries-with-angular-2-87e06db8e5d1#.sgaawgrcb)

## Previous Version
Actually there was a previous version of a module on npm with the same. I contacted the owner [sotojuan](https://www.npmjs.com/~sotojuan) and he agreed very kindly to let me rewrite completely the code and publish it under the same name, just bumping the version.
