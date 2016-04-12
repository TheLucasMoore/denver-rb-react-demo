const babelRelayPlugin = require('babel-relay-plugin');
const exec = require('sync-exec');
const result = exec("rake graphql:schema");
const schema = JSON.parse(result.stdout);

module.exports = babelRelayPlugin(schema.data);
