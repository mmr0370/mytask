const openIdUrl = require('./config').openIdUrl

App({
   data: {
        name:1,
    hotgoods: [
      {
        "name": "温暖西班牙特纳里夫12天11晚度假线",
        "price": "￥27800",
        "pic_url": "../../image/method/1.jpg",
        "viewid":'1'
      },
      {
        "name": "葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/2.jpg",
        "viewid":'2'
      },
      {
        "name": "葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/3.jpg",
        "viewid":'3'
      },
      {
         "name": "葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/4.jpg",
        "viewid":'4'
      },
      {
        "name": "葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/5.jpg",
        "viewid":'5'
      },
      {
       "name": "葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/6.jpg",
        "viewid":'6'
      }
    ]
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    openid: null
  },
  // lazy loading openid
  getUserOpenId: function(callback) {
    var self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success: function(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail: function(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail: function(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
