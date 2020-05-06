const { workerData } = require('worker_threads')
const Timeout = require('await-timeout')
const db = require('@polyphorm/crawler-database')
const { models: { WorkerSlot } } = require('@polyphorm/crawler-domain')

db.connect(workerData.connection)

async function getSlot () {
  const update = await WorkerSlot.updateOne(
    { status: 'pending' },
    { status: 'in-progress', workerId: workerData.workerId }
  )

  if (update.nModified !== 1) {
    await Timeout.set(1500)
    return await getSlot()
  }

  const slot = await WorkerSlot.findOne(
    { workerId: workerData.workerId }
  )

  return slot.toObject()
}

async function run () {
  const slot = await getSlot()
}

(async () => await run())()
