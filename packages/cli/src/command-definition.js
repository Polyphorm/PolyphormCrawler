const { program } = require('commander')
const startCommand = require('./commands/start')

startCommand.register(program)

module.exports = program
