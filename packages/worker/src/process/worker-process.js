const { workerData } = require('worker_threads')

setInterval(() => {
  console.log('worker is alive')
  console.log(workerData)
}, 1000)
