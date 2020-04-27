const Job = require('./model/jobDefinition')

module.exports = {
  async getSchedule () {
    const jobs = await Job.find({})
    return jobs.map(job => job.toObject())
  },

  async setSchedule (jobs) {
    await Promise.all(jobs
      .map(job => new Job(job))
      .map(job => job.save()))
  }
}
