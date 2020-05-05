const nodeCron = require('node-cron')

module.exports = {
  async schedule (cronJob) {
    nodeCron.schedule(cronJob.cronExpression, () => cronJob.execute(), {})
  }
}
