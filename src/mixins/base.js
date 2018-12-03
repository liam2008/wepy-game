import wepy from 'wepy'

export default class baseMixin extends wepy.mixin {
  /**
   * [公共方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  noop() {
    return null
  }

  hasOwn(obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type)
  }

  objLength(input) {
    let type = toString(input)
    let length = 0
    if (type !== '[object Object]') {
      // throw '输入必须为对象{}！'
    } else {
      for (let key in input) {
        if (key !== 'number') {
          length++
        }
      }
    }
    return length
  }

  /**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isUndefined(item) {
    return typeof item === 'undefined'
  }

  isDefined(item) {
    return !this.isUndefined(item)
  }

  isString(item) {
    return typeof item === 'string'
  }

  isNumber(item) {
    return typeof item === 'number'
  }

  isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]'
  }

  isObject(item) {
    return typeof item === 'object' && !this.isArray(item)
  }

  isFunction(item) {
    return typeof item === 'function'
  }

  /**
   * [getXXX 增强方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  getString(item, defaultStr) {
    if (this.isString(item)) return item.trim()
    if (this.isNumber(item)) return `${item}`.trim()
    return defaultStr || ''
  }

  getNumber(item, defaultNum) {
    var matches = this.getString(item).match(/\d+/)
    return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum
  }

  getArray(item, defaultArr) {
    return this.isArray(item) ? item : (defaultArr || [])
  }

  getObject(item, defaultObj) {
    return this.isObject(item) ? item : (defaultObj || {})
  }

  getFunction(item) {
    return this.isFunction(item) ? item : noop
  }

  /**
   * [JSON方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  $json(item) {
    let str = {type: Object.prototype.toString.call(item)}
    try {
      str = JSON.stringify(item)
    } catch (e) {
      str.error = e && e.stack || ''
    }
    return this.isString(str) ? str : this.$json(str)
  }

  $parse(item) {
    let obj = {type: Object.prototype.toString.call(item)}
    try {
      obj = JSON.parse(item)
    } catch (e) {
      obj.error = e && e.stack || ''
    }
    return this.isObject(obj) ? obj : this.$parse(obj)
  }

  /**
   * [功能方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isPhone(str) {
    return /^1\d{10}$/.test(str)
  }
}