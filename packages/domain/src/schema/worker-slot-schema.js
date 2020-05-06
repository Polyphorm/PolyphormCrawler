const db = require('@polyphorm/crawler-database')

module.exports = new db.Schema({
  jobName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress'],
    required: true,
    default: 'pending'
  },
  workerId: {
    type: String,
    default: null
  }
})
