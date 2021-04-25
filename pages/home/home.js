// pages/home/home.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '李四',
    age: 15,
    movies: [{ name: '老人与海', year: '1990' },
    { name: '小人鱼', year: '1932' },
    { name: '老大哥', year: '1231' }],
    count: 1,
    list: []
  },
  onLoad() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1',
      success: (res) => {
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleGetUserInfo(event) {
      console.log(event);
    }
  },
  //监听页面滚动事件
  onPageScroll(obj) {
    console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('滚到了底部');
  },
  onPullDownRefresh() {
    console.log('刷新了');
  }
})
