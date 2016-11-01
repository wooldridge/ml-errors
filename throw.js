console.log('starting...');

var aFunc = function aFunc () {
  throw new Error('this is an error');
}

try {
  aFunc();
}
catch (e) {
  console.log('error caught');
  console.log(e);
}
