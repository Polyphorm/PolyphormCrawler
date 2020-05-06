const workerSpawner = require('./process/worker-spawner')

module.exports = {
  run (config) {
    workerSpawner.spawn(config.threads)
  }
}
