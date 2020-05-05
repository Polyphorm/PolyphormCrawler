const {
  models: {
    WorkerSlot,
    Resource
  }
} = require('@polyphorm/crawler-domain')

module.exports = class CronJob {
  constructor (job) {
    this.name = job.definition.name
    this.cronExpression = job.definition.cronExpression
    this.initialResources = job.definition.initialResources
    this.scripts = job.scripts
    this.concrrency = job.definition.concurrency
  }

  async execute () {
    const jobName = this.name

    await Resource.deleteMany({ 'metadata.jobName': jobName })

    for (const resource of this.initialResources) {
      const metadata = { jobName }
      await new Resource(Object.assign({}, resource, { metadata })).save()
    }

    await WorkerSlot.deleteMany({ jobName })

    for (let i = 0; i < this.concrrency; i++) {
      await new WorkerSlot({ jobName }).save()
    }

    console.log(`Job name: ${this.name}`)
    console.log(`Cron expression: ${this.cronExpression}`)
    console.log(`Scripts: ${this.scripts.length}`)
    console.log(`Initial Resources: ${JSON.stringify(this.initialResources)}`)
  }
}
