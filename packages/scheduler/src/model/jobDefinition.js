const mongo = require('@polyphorm/crawler-mongo')
const jobDefinitionSchema = require('../schema/jobDefinition')

module.exports = mongo.getInstance().model('JobDefinition', jobDefinitionSchema)
