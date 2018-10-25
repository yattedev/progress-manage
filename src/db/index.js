const redis_crud = require('./redis-crud')

exports.getValueByKey = redis_crud.getValueByKey
exports.insert = redis_crud.insert
exports.deleteItem = redis_crud.deleteItem
