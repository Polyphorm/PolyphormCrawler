const mongo = require('@polyphorm/crawler-mongo')

module.exports = {
  async connect () {
    await mongo.connect('mongodb://localhost/polyphorm-crawler-test')
  },

  async drop () {
    await mongo.getConnection().db.dropDatabase()
  },

  async disconnect () {
    await mongo.disconnect()
  }
}
