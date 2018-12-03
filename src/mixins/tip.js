import wepy from 'wepy'

export default class TipsMixin extends wepy.mixin {
  constructor() {
    super()
    this.isLoading = false
  }

  //弹出提示框
  success(title, duration = 500) {
    setTimeout(() => {
      wepy.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      })
    }, 300)
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

  //错误框
  error(title, onHide) {
    wepy.showToast({
      title: title,
      image: '../images/icon/error.png',
      mask: true,
      duration: 500
    })
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  //弹出确认窗口
  confirm(text, payload = {}, title = '提示') {
    return new Promise((resolve, reject) => {
      wepy.showModal({
        title: title,
        content: text,
        showCancel: false,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.cancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }

  //toast
  toast(title, onHide, icon = 'success') {
    setTimeout(() => {
      wepy.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      })
    }, 300)

    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  //警告框
  alert(title) {
    wepy.showToast({
      title: title,
      icon: '../images/icon/alert.png',
      mask: true,
      duration: 1500
    })
  }

  //加载提示
  loading(title = '加载中') {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    wepy.showLoading({
      title: title,
      mask: true
    })
  }

  //加载完毕
  loaded() {
    if (this.isLoading) {
      this.isLoading = false
      wepy.hideLoading()
    }
  }

  //分享
  share(title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: function(res) {
        this.toast('分享成功')
      }
    }
  }
}
