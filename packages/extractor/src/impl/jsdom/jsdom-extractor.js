const vm = require('vm')
const { JSDOM } = require('jsdom')
const Matcher = require('./matcher')
const Context = require('./context')

function createDocument (page) {
  const { document } = new JSDOM(page.content, {
    url: page.url
  }).window

  return document
}

module.exports = {
  type: 'jsdom',
  async extract (page, scripts) {
    const data = {}
    const resources = []

    scripts.forEach(script => {
      const matcher = new Matcher()
      const document = createDocument(page)
      const [matcherScript, executionScript] = [script.matcher, script.execution]

      const ctx = vm.createContext(new Context(page.url, document, resources, data, matcher))
      vm.runInContext(matcherScript, ctx)

      if (matcher.isAccepted()) {
        vm.runInContext(executionScript, ctx)
      }
    })

    return {
      data,
      resources
    }
  }
}
