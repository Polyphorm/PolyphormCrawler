const path = require('path')
const { v4 } = require('uuid')
const { Worker } = require('worker_threads')

module.exports = {
  spawn (threads) {
    const workerProcessFile = path.join(__dirname, 'worker-process.js')
    for (let i = 0; i < threads; i++) {
      // eslint-disable-next-line no-new
      new Worker(workerProcessFile, {
        workerData: {
          workerName: v4()
        }
      })
    }
  }
}
