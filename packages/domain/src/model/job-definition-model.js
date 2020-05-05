const db = require('@polyphorm/crawler-database')
const jobDefinitionSchema = require('../schema/job-definition-schema')

module.exports = db.model('JobDefinition', jobDefinitionSchema)
