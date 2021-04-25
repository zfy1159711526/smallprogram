//注册小程序
App({
  //生命周期函数
  //初始化完成时候回调
  onLaunch: function () {
    console.log('初始化完成');
    //异步调用,获取用户资料
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
  },
  //监听小程序启动或切前台。
  onShow: function (options) {
    //判断小程序进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1004:
        break;
    }
    console.log('显示的时候被回调');
  },
  //监听小程序切后台
  onHide: function () {
    console.log('界面被隐藏时执行');
  },
  //错误监听函数。
  onError: function () {
    console.log('发生错误的时候执行');
  }
})