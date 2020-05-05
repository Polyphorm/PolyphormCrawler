const mongoose = require('mongoose')

const database = new mongoose.Mongoose()

module.exports = {
  model: database.model.bind(database),
  Schema: database.Schema.bind(database),

  async connect (connectionString) {
    await database.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}
