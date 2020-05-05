const { program } = require('commander')
const managerCommand = require('./commands/manager')
const workerCommand = require('./commands/worker')

managerCommand.register(program)
workerCommand.register(program)

module.exports = program
