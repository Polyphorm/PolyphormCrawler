const httpFetcher = require('./impl/http-fetcher')

const fetchers = [
  httpFetcher
]

module.exports = {
  async fetch (resource, fetcherConfiguration) {
    const fetcherType = fetcherConfiguration.type
    const fetcher = fetchers.find(fetcher => fetcher.type === fetcherType)

    if (!fetcher) {
      throw new Error(`Cannot find fetcher with type ${fetcherType}`)
    }

    return fetcher.fetch(resource)
  }
}
