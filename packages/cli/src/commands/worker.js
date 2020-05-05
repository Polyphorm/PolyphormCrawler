const worker = require('@polyphorm/crawler-worker')

module.exports = {
  register (program) {
    program.command('worker')
      .description('starts worker instance')
      .requiredOption('-c, --connection <connection>', 'database connection url')
      .action(async options => {
        const {
          connection
        } = options

        await worker.run({
          connection
        })
      })
  }
}
