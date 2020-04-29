module.exports = class Matcher {
  constructor () {
    this._accepted = false
  }

  accept () {
    this._accepted = true
  }

  isAccepted () {
    return !!this._accepted
  }
}
