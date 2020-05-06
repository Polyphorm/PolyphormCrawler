const worker = require('@polyphorm/crawler-worker')

module.exports = {
  register (program) {
    program.command('worker')
      .description('starts worker instance')
      .requiredOption('-c, --connection <connection>', 'database connection url')
      .option('-t, --threads <threads>', 'amount of parallel workers executed', '5')
      .action(async options => {
        const {
          connection,
          threads
        } = options

        await worker.run({
          connection,
          threads
        })
      })
  }
}
