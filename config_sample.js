var pjson = require('./package.json');
var path = require('path');

var config = {};

config.path = path.dirname(require.main.filename) + "/";

config.host = "HOSTNAME";

config.auth = {
  user: 'ML_USER',
  pass: 'ML_PASSWORD',
  sendImmediately: false
};

config.database = {
  "name": pjson.name,
  "port": 8568
};

config.databaseSetup = {
  "database-name": config.database.name,
  "range-element-index": [
    {
      "collation": "",
      "invalid-values": "reject",
      "localname": "valStart",
      "namespace-uri": "",
      "range-value-positions": false,
      "scalar-type": "dateTime"
    },
    {
      "collation": "",
      "invalid-values": "reject",
      "localname": "valEnd",
      "namespace-uri": "",
      "range-value-positions": false,
      "scalar-type": "dateTime"
    },
    {
      "collation": "",
      "invalid-values": "reject",
      "localname": "sysStart",
      "namespace-uri": "",
      "range-value-positions": false,
      "scalar-type": "dateTime"
    },
    {
      "collation": "",
      "invalid-values": "reject",
      "localname": "sysEnd",
      "namespace-uri": "",
      "range-value-positions": false,
      "scalar-type": "dateTime"
    }
  ]
};

config.forestSetup = {
  "forest-name": config.database.name + '-1',
  "database": config.database.name
}

config.restSetup = {
  "rest-api": {
    "name": config.database.name + "-rest",
    "database": config.database.name,
    "modules-database": config.database.name + "-modules",
    "port": config.database.port,
    "error-format": "json"
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}
