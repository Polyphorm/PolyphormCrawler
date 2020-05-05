const mongoose = require('mongoose')
const jobDefinitionSchema = require('../schema/job-definition-schema')

module.exports = mongoose.model('JobDefinition', jobDefinitionSchema)
