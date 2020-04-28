module.exports = class CronJob {
  constructor (job) {
    this.name = job.definition.name
    this.cronExpression = job.definition.cronExpression
    this.initialResources = job.definition.initialResources
    this.scripts = job.scripts
  }

  execute () {
    console.log(`Job name: ${this.name}`)
    console.log(`Cron expression: ${this.cronExpression}`)
    console.log(`Scripts: ${this.scripts.length}`)
    console.log(`Initial Resources: ${JSON.stringify(this.initialResources)}`)
  }
}
