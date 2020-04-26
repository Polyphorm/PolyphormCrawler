const manager = require('@polyphorm/crawler-manager')
const worker = require('@polyphorm/crawler-worker')

const profileExecutables = {
  manager,
  worker
}

module.exports = {
  register (program) {
    program.command('start <profile>')
      .description('starts crawler instance')
      .action(profile => {
        const runnable = profileExecutables[profile]

        if (!runnable) {
          const supportedProfiles = Object.keys(profileExecutables).map(profile => `"${profile}"`).join(', ')
          console.error(`Unsupported profile: ${profile}, the supported ones are: ${supportedProfiles}`)
          return
        }

        runnable.run()
      })
  }
}
