const db = require('@polyphorm/crawler-database')

const ScriptSchema = new db.Schema({
  execution: {
    type: String,
    required: true
  },
  matcher: {
    type: String,
    required: true
  }
}, {
  _id: false
})

module.exports = new db.Schema({
  scripts: [ScriptSchema]
})
