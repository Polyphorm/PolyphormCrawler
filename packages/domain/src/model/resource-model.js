const db = require('@polyphorm/crawler-database')
const ResourceSchema = require('../schema/resource-schema')

module.exports = db.model('Resource', ResourceSchema)
