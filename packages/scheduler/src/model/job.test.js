const testUtils = require('@polyphorm/crawler-test-utils')
const Job = require('./job')

describe('job model', () => {
  let job

  beforeAll(async () => {
    await testUtils.database.connect()
  })

  beforeEach(async () => {
    await testUtils.database.drop(Job)
  })

  afterAll(async () => {
    await testUtils.database.disconnect()
  })

  describe('save', () => {
    describe('name property not set', () => {
      beforeEach(() => {
        job = new Job({
          cronExpression: 'test'
        })
      })

      test('throws error', async () => {
        await expect(job.save()).rejects.toThrow('Job validation failed: name: Path `name` is required.')
      })
    })

    describe('cronExpression property not set', () => {
      beforeEach(() => {
        job = new Job({
          name: 'test'
        })
      })

      test('throws error', async () => {
        await expect(job.save()).rejects
          .toThrow('Job validation failed: cronExpression: Path `cronExpression` is required.')
      })
    })

    describe('all mandatory properties set', () => {
      beforeEach(() => {
        job = new Job({
          name: 'test1',
          cronExpression: 'test2'
        })
      })

      test('saves entity', async () => {
        await job.save()

        const jobs = await Job.find({})

        expect(jobs.length).toBe(1)
        expect(jobs[0].name).toEqual('test1')
        expect(jobs[0].cronExpression).toEqual('test2')
      })
    })
  })
})
