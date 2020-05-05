const manager = require('@polyphorm/crawler-manager')

module.exports = {
  register (program) {
    program.command('manager')
      .description('starts manager instance')
      .requiredOption('-c, --connection <connection>', 'database connection url')
      .action(options => {
        const {
          connection
        } = options

        manager.run({
          connection
        })
      })
  }
}
