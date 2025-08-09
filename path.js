const path= require('path');
console.log(path.basename('/users/prakash/fiel.js'));
console.log(path.dirname('/users/prakash/fiel.js'));
console.log(path.extname('/users/prakash/fiel.js'));
console.log(path.join('users','prakash','file.js'));
console.log(path.resolve('users','file.js'));
console.log(path.isAbsolute('/users/prakash/fiel.js'));
console.log(path.normalize('/users/prakash/fiel.js'));
console.log(path.parse('/users/prakash/fiel.js'));
console.log(path.format({
  root: '/',
  dir: '/users/prakash',
  base: 'fiel.js',
  ext: '.js',
  name: 'fiel'
}));