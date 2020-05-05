module.exports = class Resource {
  constructor (url) {
    this.res = {
      url
    }

    this.fetcherConfiguration = {}
    this.extractorConfiguration = {}
  }

  withFetcherType (type) {
    this.fetcherConfiguration.type = type
  }

  withExtractorType (type) {
    this.extractorConfiguration.type = type
  }
}
