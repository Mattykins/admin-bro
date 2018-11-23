const NotImplementedError = require('../../utils/not-implemented-error')

/**
 * Representation of a ORM Model in AdminBro
 */
class AbstractModel {
  /**
   * Return name of the model
   * @return {String}
   */
  name() {
    throw new NotImplementedError()
  }

  /**
   * returns array of properties
   * @return {AbstractProperty[]}
   */
  properties() {
    throw new NotImplementedError()
  }

  /**
   * returns property object for given field
   * @return {AbstractProperty}
   */
  property(name) {
    throw new NotImplementedError()
  }

  /**
   * Returns number of elements for given model
   * @return {[type]} [description]
   */
  count() {
    throw new NotImplementedError()
  }

  /**
   * Returns actual records for given model
   * @param  {Object} where           query
   * @param  {Number} options.limit   how many records should be taken
   * @param  {Number} options.offset  offset
   * @return {Object[]}               list of all records
   */
  find(where, { limit=20, offset=0 }) {
    throw new NotImplementedError()
  }
}

module.exports = AbstractModel
