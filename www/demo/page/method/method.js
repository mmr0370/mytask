//获取应用实例
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
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
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})
