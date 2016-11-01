var fs = require('fs');

//var x = fs.readFile('/nofile.txt', function (err, resp) {
var x = fs.readFile('/temp/temp.txt', function (err, resp) {
  if (err) {
    console.log('error')
    console.dir(err);
  } else {
    console.log('success');
    console.dir(resp);
  }
});
