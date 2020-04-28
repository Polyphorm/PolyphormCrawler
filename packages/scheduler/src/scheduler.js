const nodeCron = require('node-cron')
const CronJob = require('./cron-job')
const { loader: configurationLoader } = require('@polyphorm/crawler-configuration')

module.exports = {
  async schedule (configurationDir) {
    const configuration = await configurationLoader.load(configurationDir)

    configuration.jobs
      .map(job => new CronJob(job))
      .forEach(job => nodeCron.schedule(job.cronExpression, () => job.execute(), {}))
  }
}
