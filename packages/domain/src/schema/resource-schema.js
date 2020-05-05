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
    required: true
  }
}, {
  _id: false
})

const ExtractorConfigurationSchema = new db.Schema({
  type: {
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
    required: true
  },
  extractorConfiguration: {
    type: ExtractorConfigurationSchema,
    required: true
  }
})
