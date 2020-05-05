const db = require('@polyphorm/crawler-database')
const WorkerSlotSchema = require('../schema/worker-slot-schema')

module.exports = db.model('WorkerSlot', WorkerSlotSchema)
