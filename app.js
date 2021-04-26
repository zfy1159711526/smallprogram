App({
  gobleData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
   const token = wx.getStorageSync('token')
   if(token && token.length !==0){
      this.check_token(token)
   } else {
     this.login()
   }
  },
  check_token(token){
    console.log('执行了验证token操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
       if(!res.data.errCode){
         console.log('token有效');
         this.gobleData.token =  token
       } else {
        this.login()
       }
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  },

  login(){
    console.log('执行了登陆操作');
    wx.login({
      success: (res) => {
        //1.取出code
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;
            //2.将token保存在gobleData中
            this.gobleData.token = token;
            //3.将token保存在本地缓存
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
