const Resource = require('./src/resource')
const JobDefinition = require('./src/model/job-definition-model')
const WorkerSlot = require('./src/model/worker-slot-model')
const ResourceModel = require('./src/model/resource-model')

module.exports = {
  Resource,
  models: {
    JobDefinition,
    WorkerSlot,
    Resource: ResourceModel
  }
}
