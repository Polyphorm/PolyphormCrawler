const mongo = require('@polyphorm/crawler-mongo')
const Schema = mongo.getInstance().Schema

const Resource = new Schema({
  uri: {
    type: String,
    required: true
  }
})

const Definition = new Schema({
  initialResources: {
    type: [Resource],
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'waiting',
    enum: [
      'waiting',
      'running',
      'finished',
      'error',
      'timeout'
    ]
  }
})

module.exports = new Schema({
  name: {
    type: String,
    required: true
  },
  cronExpression: {
    type: String,
    required: true
  },
  definition: {
    type: Definition,
    required: true
  }
})
