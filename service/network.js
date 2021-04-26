export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data,
      //因为success是一个回调函数，且resolve也是回调函数，这里就要可以直接简写
      success: resolve,
      fail: reject
    })
  })
}