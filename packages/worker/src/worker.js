const workerSpawner = require('./process/worker-spawner')

module.exports = {
  async run (config) {
    workerSpawner.spawn(config.connection, config.threads)
  }
}
