const db = require('@polyphorm/crawler-database')

const ResSchema = new db.Schema({
  url: {
    type: String,
    required: true
  }
}, {
  _id: false
})

const FetcherConfigurationSchema = new db.Schema({
  type: {
    type: String,
    required: true,
    default: 'http'
  }
}, {
  _id: false
})

const ExtractorConfigurationSchema = new db.Schema({
  type: {
    type: String,
    required: true,
    default: 'jsdom'
  }
}, {
  _id: false
})

const MetadataSchema = new db.Schema({
  workedId: {
    type: String,
    default: null
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ['pending', 'in-progress']
  },
  jobName: {
    type: String,
    required: true
  }
}, {
  _id: false
})

module.exports = new db.Schema({
  res: {
    type: ResSchema,
    required: true
  },
  fetcherConfiguration: {
    type: FetcherConfigurationSchema,
    required: true,
    default: {}
  },
  extractorConfiguration: {
    type: ExtractorConfigurationSchema,
    required: true,
    default: {}
  },
  metadata: {
    type: MetadataSchema,
    required: true
  }
})
