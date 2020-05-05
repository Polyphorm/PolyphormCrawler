const { Resource } = require('@polyphorm/crawler-domain')

module.exports = class Context {
  constructor (url, document, resources, data, matcher) {
    return {
      Resource,
      document,
      api: {
        environment: {
          getURL () {
            return url
          }
        },
        matcher: {
          accept () {
            matcher.accept()
          }
        },
        resources: {
          add (resource) {
            resources.push(resource)
          }
        },
        data: {
          add (collectionName, id, result) {
            data[collectionName] = data[collectionName] ? data[collectionName] : {}
            data[collectionName][id] = result
          }
        },
        context: {
          get (property) {
            throw new Error('method not supported yet')
          },
          set (property, value) {
            throw new Error('method not supported yet')
          }
        }
      }
    }
  }
}
