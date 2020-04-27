const testUtils = require('@polyphorm/crawler-test-utils')
const JobDefinition = require('./jobDefinition')

describe('job definition model', () => {
  let jobDefinition

  beforeAll(testUtils.database.connect)
  beforeEach(testUtils.database.drop)
  afterAll(testUtils.database.disconnect)

  describe('save', () => {
    describe('name property not set', () => {
      beforeEach(() => {
        jobDefinition = new JobDefinition({
          cronExpression: 'test'
        })
      })

      test('throws error', async () => {
        await expect(jobDefinition.save()).rejects.toThrow('JobDefinition validation failed: name: Path `name` is required.')
      })
    })

    describe('cronExpression property not set', () => {
      beforeEach(() => {
        jobDefinition = new JobDefinition({
          name: 'test'
        })
      })

      test('throws error', async () => {
        await expect(jobDefinition.save()).rejects
          .toThrow('JobDefinition validation failed: cronExpression: Path `cronExpression` is required.')
      })
    })

    describe('all mandatory properties set', () => {
      beforeEach(() => {
        jobDefinition = new JobDefinition({
          name: 'test1',
          cronExpression: 'test2'
        })
      })

      test('saves entity', async () => {
        await jobDefinition.save()

        const jobDefinitionResults = await JobDefinition.find({})
        const jobDefinitions = jobDefinitionResults.map(jobDefinition => jobDefinition.toObject())

        expect(jobDefinitions.length).toBe(1)
        expect(jobDefinitions[0].name).toEqual('test1')
        expect(jobDefinitions[0].cronExpression).toEqual('test2')
      })
    })
  })
})
