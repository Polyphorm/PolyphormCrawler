const mongoose = require('mongoose')

const instance = new mongoose.Mongoose()
let conn

module.exports = {
  async connect (connectionString) {
    conn = await instance.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  getInstance () {
    return instance
  },

  getConnection () {
    return conn.connection
  },

  async disconnect () {
    await instance.disconnect()
  }
}
