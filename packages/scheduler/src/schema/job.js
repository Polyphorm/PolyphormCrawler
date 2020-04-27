const mongo = require('@polyphorm/crawler-mongo')
const Schema = mongo.getInstance().Schema

module.exports = new Schema({
  name: {
    type: String,
    required: true
  },
  cronExpression: {
    type: String,
    required: true
  }
})
