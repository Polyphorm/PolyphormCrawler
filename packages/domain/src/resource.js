module.exports = class Resource {
  constructor (url) {
    this.res = {
      url
    }

    this.fetcherConfiguration = {
      type: 'http'
    }

    this.extractorConfiguration = {
      type: 'jsdom'
    }
  }

  withFetcherType (type) {
    this.fetcherConfiguration.type = type
  }

  withExtractorType (type) {
    this.extractorConfiguration.type = type
  }
}
