class Asset {
  /**
   * Asset Class
   * @param props {Object}
   */
  constructor(props) {
    const { type, url } = props

    this.allowedTypes = [
      'stylesheet',
      'style',
      'css',
      'javascript',
      'script',
      'js',
    ]

    this.asset = { type, url }
    this.validate()
  }


  /**
   * Get asset full url
   * @return {string}
   */
  get url() {
    return this.asset.url
  }


  /**
   * Set asset url
   * @param value {string}
   */
  set url(value) {
    this.asset.url = value
  }


  /**
   * Check for valid asset type
   * @return {boolean}
   */
  get isValid() {
    return this.allowedTypes.includes(this.asset.type)
  }


  /**
   * Validate is allowed type
   * @return void
   */
  validate() {
    if (!this.isValid) {
      throw 'Invalid asset type. List of allowed types: ' + this.allowedTypes.join(',')
    }
  }
}

module.exports = Asset