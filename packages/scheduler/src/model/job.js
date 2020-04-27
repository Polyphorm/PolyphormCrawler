const mongo = require('@polyphorm/crawler-mongo')
const jobSchema = require('../schema/job')

module.exports = mongo.getInstance().model('Job', jobSchema)
