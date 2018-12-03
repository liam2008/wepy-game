import wepy from 'wepy'

export default class userMixin extends wepy.mixin {
  /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
  isFunction(item) {
    return typeof item === 'function'
  }

  /* ========================== 用户方法 ========================== */
  // 获取用户信息
  $getUserInfo(callback) {
    // 顶级容错
    if (!this.$parent || !this.$parent.$updateGlobalData) return
    // 取缓存信息
    const user = this.$parent.$updateGlobalData('user')
    // 不重复获取用户信息
    if (user && user.nickname) {
      this.isFunction(callback) && callback(user)
      this.$apply()
      return user
    }

    // 首次获取用户信息
    wepy.navigateTo({
      url: '/pages/authorize/authorize'
    })
  }

  // 进行微信登陆
  $login(cb) {
    let self = this
    wepy.login({
      success: (res) => {
        self.isFunction(cb) && cb(res)
      },
      fail: (res) => {
        self.isFunction(cb) && cb(res)
      }
    })
  }

  /* ========================= 其他方法 ========================= */
  //判断用户是否登录
  _wxCheckLogin(cb) {
    let self = this
    wepy.getStorage({
      key: 'session',
      success (res) {
        self.isFunction(cb) && cb(true)
      },
      fail (res) {
        self.isFunction(cb) && cb(false)
      }
    })
  }
}
