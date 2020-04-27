const mongoose = require('mongoose')

const instance = new mongoose.Mongoose()

module.exports = {
  connect (connectionString) {
    instance.connect(connectionString)
  },

  get () {
    return instance
  }
}
