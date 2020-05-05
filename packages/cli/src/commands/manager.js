const manager = require('@polyphorm/crawler-manager')

module.exports = {
  register (program) {
    program.command('manager')
      .description('starts manager instance')
      .requiredOption('-c, --connection <connection>', 'database connection url')
      .requiredOption('-d, --jobs-configuration-dir <jobsConfigurationDir>', 'directory with jobs configuration')
      .action(options => {
        const {
          connection,
          jobsConfigurationDir
        } = options

        manager.run({
          connection,
          jobsConfigurationDir
        })
      })
  }
}
