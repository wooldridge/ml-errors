# ml-certauth

## Running

1. Copy `config_sample.js` to `config.js` and edit for your environment (HOSTNAME, ML_USER, ML_PASSWORD). Create a REST server and database by running:

  `node setup.js`

2. Run the various scripts to display errors, e.g.:

  `node eval.js`

3. To delete the REST server and database, run the following:

  `node teardown.js`
