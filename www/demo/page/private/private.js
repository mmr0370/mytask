//获取应用实例
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hotgoods: [
      {
        "title": "1松赞香格里拉环线 探索三江并流",
        "name":"有一种行走改变我们的人生，有一种体验是智慧的旅程",
        "banner_pic1":"../../image/private/p1_banner1.png",
        "banner_pic2":"../../image/private/p1_banner2.png",
        "banner_pic3":"../../image/private/p1_banner3.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic1.png",
        "viewid":'0',
      },
      {
       "title": "2浪漫摩洛哥 狂游撒哈拉",
        "name":"摩洛哥深度全景12天",
        "banner_pic1":"../../image/private/p2_banner1.png",
        "banner_pic2":"../../image/private/p2_banner2.png",
        "banner_pic3":"../../image/private/p2_banner3.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic2.png",
        "viewid":'1',
      },
      {
        "title": "3一场非凡的香格里拉旅行",
        "name":"夏日高山的欢乐时光/做客睦邻村落/松赞林寺寻找宝藏",
        "banner_pic1":"../../image/private/p3_banner1.png",
        "banner_pic2":"../../image/private/p3_banner2.png",
        "banner_pic3":"../../image/private/p3_banner3.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic3.png",
        "viewid":'2',
      },
      {
        "title": "4探寻草原深处的牧歌",
        "name":"唯美伊犁7日之旅）",
        "banner_pic":"../../image/private/p4_banner1.png",
        "banner_pic":"../../image/private/p4_banner2.png",
        "banner_pic":"../../image/private/p4_banner3.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic4.png",
        "viewid":'3',
      },
      {
        "title": "5南亚伊甸园·斯里兰卡Sri Lanka",
        "name":"文化古城、大象孤儿院、佛牙寺、雅拉公园、海滨悠然9天",
        "banner_pic1":"../../image/private/p1_banner5.png",
        "banner_pic2":"../../image/private/p1_banner5.png",
        "banner_pic3":"../../image/private/p1_banner5.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic5.png",
        "viewid":'4',
      },
      {
       "title": "6来自草原的呼唤",
        "name":"呼伦贝尔亲子体验之旅",
        "banner_pic1":"../../image/private/p1_banner6.png",
        "banner_pic2":"../../image/private/p1_banner6.png",
        "banner_pic3":"../../image/private/p1_banner6.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic6.png",
        "viewid":'5',
      }, {
       "title": "7西班牙大西洋海岸豪华列车之旅",
        "name":"这是一列诞生于20年代初的列车，她的迷人之处在于，她除了拥有现代设施为您创造的顶级舒适体验，更重要 的是，她完美保留了那个已经远离我们的年代的气质",
        "banner_pic1":"../../image/private/p1_banner7.png",
        "banner_pic2":"../../image/private/p1_banner7.png",
        "banner_pic3":"../../image/private/p1_banner7.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic7.png",
        "viewid":'6',
      },{
       "title": "8恋上花海.济州浪漫樱花祭",
        "name":"济 州 赏 樱 4 日 （此产品2人成行）",
        "banner_pic1":"../../image/private/p1_banner8.png",
        "banner_pic2":"../../image/private/p1_banner8.png",
        "banner_pic3":"../../image/private/p1_banner8.png",
        "price": "¥1699/人起",
        "pic_url": "../../image/private/index_pic8.png",
        "viewid":'7',
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 listClick: function (event) {
   var that=this,
        index = event.currentTarget.id,
        hotgoods = this.data.hotgoods,
        a=this.data.hotgoods[index].banner_pic1,
        b=this.data.hotgoods[index].banner_pic2,
        c=this.data.hotgoods[index].banner_pic3
        console.log(index) 
        console.log(hotgoods)
    try {  
      wx.setStorageSync('index', event.currentTarget.id)
      wx.setStorageSync('hotgoods', this.data.hotgoods)
      wx.setStorageSync('a', a)
      wx.setStorageSync('b', b)
      wx.setStorageSync('c', c)
    
      console.log(index) 
      console.log(hotgoods)
      console.log(a)
      console.log(this.data.hotgoods[index].banner_pic1)
    } catch (e) { 
      console.log("error") 
    }  

    wx.navigateTo({
      url: 'detail?id={{good.viewid}}',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }  
})
