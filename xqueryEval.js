var config = require('./config'),
    fs = require('fs'),
    marklogic = require('marklogic');

var db = marklogic.createDatabaseClient({
  host: config.host,
  port: config.database.port,
  user: config.auth.user,
  password: config.auth.pass,
  authType: 'digest'
});

var src = fs.readFileSync(
  '/Users/mwooldri/projects/ml-errors/script.xqy',
  {encoding: 'utf8'}
);

db.xqueryEval({
  source: src,
  variables: {x: 100, y: 0}
}).result().then(function (response){
  console.log('Promise resolved: ');
  console.log(JSON.stringify(response, null, 2));
}).catch(function (error) {
  console.log('Promise rejected, error: ');
  console.log(JSON.stringify(error, null, 2));
});


