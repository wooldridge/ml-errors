var servers = xdmp.servers();
var serverInfo = [];
for (var s of servers) {
  var dbId = xdmp.serverDatabase(s);
  //var dbName = xdmp.databaseName(dbId);
  var dbName = (dbId) ? xdmp.databaseName(dbId) : '';
  var obj = {
    name: xdmp.serverName(s),
    port: xdmp.serverPort(s),
    db: dbName
  };
  serverInfo.push(obj);
};
serverInfo;
