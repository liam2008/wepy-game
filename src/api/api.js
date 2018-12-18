const host = 'https://93app.cn/addons/cms'
// 下面的地址配合云端 Demo 工作
export const service = {
  // 屏蔽
  isOpen: `${host}/wxapp.common/isOpen`,

  // 登陆 post
  login: `${host}/wxapp.common/getSessionId`,

  // 首页轮播图 post
  bannerList: `${host}/wxapp.common/getBannerList`,

  //热门网游推荐
  popular: `${host}/wxapp.index/popular`,

  //最新游戏
  news: `${host}/wxapp.index/news`,

  //女生
  women: `${host}/wxapp.index/women`,

  //开服
  openGame: `${host}/wxapp.index/openGame`,

  //更多
  moreGame: `${host}/wxapp.index/moreGame`,

  //tab 热门
  hot: `${host}/wxapp.index/hot`,

  //搜索
  search: `${host}/wxapp.search/index`,

  //最近
  last: `${host}/wxapp.index/lastPlay`,

  //客服
  contact: `${host}/wxapp.common/responseMsg`,

  //prev
  prev: `${host}/wxapp.common/getCoverList`,

  // 主域
  host
}

export default {
  service
}
