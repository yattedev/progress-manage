const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getValueByKey = promisify(client.get).bind(client);
const insert = promisify(client.set).bind(client);
const deleteItem = promisify(client.del).bind(client);

exports.getValueByKey = getValueByKey
exports.insert = insert
exports.delete = deleteItem;