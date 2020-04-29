const axios = require('axios')

module.exports = {
  type: 'http',
  async fetch (resource) {
    const response = await axios.get(resource.url)
    const content = response.data
    return { content }
  }
}
