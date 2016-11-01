var fs = require('fs');

var aFunc = function () {
  var x = fs.readFileSync('/nofile.txt');
}

try {
  aFunc();
}
catch (e) {
  console.log('error caught');
  console.log(e);
}
