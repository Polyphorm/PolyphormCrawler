const mongoose = require('mongoose')
const { loader: configurationLoader } = require('@polyphorm/crawler-configuration')
const { models: { JobDefinition } } = require('@polyphorm/crawler-domain')
const { scheduler, CronJob } = require('@polyphorm/crawler-scheduler')

module.exports = {
  async run (config) {
    await mongoose.connect(config.connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const jobsConfiguration = await configurationLoader.load(config.jobsConfigurationDir)

    await JobDefinition.deleteMany({})

    const definitionPromises = jobsConfiguration.jobs
      .map(job => new JobDefinition(job).save())

    await Promise.all(definitionPromises)

    const schedulerPromises = jobsConfiguration.jobs
      .map(job => scheduler.schedule(new CronJob(job)))

    await Promise.all(schedulerPromises)

    console.log('finished')
  }
}
