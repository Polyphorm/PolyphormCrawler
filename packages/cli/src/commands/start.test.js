jest.mock('@polyphorm/crawler-manager')
jest.mock('@polyphorm/crawler-worker')

const { Command } = require('commander')
const startCommand = require('./start')

describe('start command', () => {
  beforeEach(() => {
    jest.spyOn(process, 'exit').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    process.exit.mockRestore()
    console.error.mockRestore()
  })

  describe('command executed without profile argument', () => {
    test('error is printed', () => {
      executeCommand('start')

      expect(console.error).toHaveBeenCalledWith('error: missing required argument \'profile\'')
    })
  })

  describe('command executed with unknown profile', () => {
    test('error is printed', () => {
      executeCommand('start', 'unknown')

      expect(console.error)
        .toHaveBeenCalledWith('Unsupported profile: unknown, the supported ones are: "manager", "worker"')
    })
  })

  describe('command executed with correct profile', () => {
    test('no error is printed', () => {
      executeCommand('start', 'manager')

      expect(console.error).not.toHaveBeenCalled()
    })
  })
})

function executeCommand (...args) {
  const command = new Command('program')
  startCommand.register(command)

  command.parse(['', 'program', ...args])
}
