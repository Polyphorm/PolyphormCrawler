const fetcher = require('@polyphorm/crawler-fetcher')
const extractor = require('@polyphorm/crawler-extractor')

module.exports = {
  async execute (resource, scripts) {
    const page = await fetcher.fetch(resource.res, resource.fetchConfiguration)
    return await extractor.extract(page, scripts, resource.extractorConfiguration)
  }
}
