var config = require('./config'),
    marklogic = require('marklogic');

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  //password: config.auth.pass,
  password: 'wrong',
  authType: 'digest'
});

db.read('/doc.json').result()
.then(function (response) {
  console.log('resolved');
  console.dir(response);
})
.catch(function (response) {
  console.log('rejected');
  console.log(response);
});
