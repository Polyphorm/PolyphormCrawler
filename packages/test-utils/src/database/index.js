const mongo = require('@polyphorm/crawler-mongo')

module.exports = {
  async connect () {
    await mongo.connect('mongodb://localhost/polyphorm-crawler-test')
  },

  async drop (...models) {
    await Promise.all(models.map(model => model.remove({})))
  },

  async disconnect () {
    await mongo.disconnect()
  }
}
