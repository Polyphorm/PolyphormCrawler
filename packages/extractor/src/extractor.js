const jsdomExtractor = require('./impl/jsdom/jsdom-extractor')

const extractors = [
  jsdomExtractor
]

module.exports = {
  async extract (page, scripts, configuration) {
    const extractor = extractors.find(extractor => extractor.type === configuration.type)

    if (!extractor) {
      throw new Error(`Cannot find extractor with type ${configuration.type}`)
    }

    return extractor.extract(page, scripts)
  }
}
