//获取应用实例
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hotgoods: [
      {
        "name": "1温暖西班牙特纳里夫12天11晚度假线",
        "price": "￥27800",
        "pic_url": "../../image/method/1.jpg",
        "viewid":'0',
        'title':'详情内容',
        'detail':'1早餐后游览葡萄牙第二大城市，被誉为“美酒之乡”的波尔图。参观牧师塔是波尔图市中心的绝对地标式建筑，由于它的高度，也让它成为最好找的景点，几乎在老城各个角度都能看到，有种走到哪里不想看到它却总是出现在眼前的感觉。之后前往莱罗书店坐落在波尔图老城狮子广场附近，属于新哥特式建筑，书店中葡萄牙皇家风格的内饰极尽奢华，它被福布斯评为“全球最美的藏书地”之一，也是“哈利波特”作者灵感的来源地之一。'
      },
      {
        "name": "2葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/2.jpg",
        "viewid":'1',
         'title':'详情内容',
           'detail':'2游览路易斯一世大桥位于波尔图中心，横跨杜罗河链接老城和加亚新城两岸，1886年建成，是设计师——亚历山大·古斯塔夫·艾菲尔——埃菲尔铁塔的设计师的徒弟建造的。利贝拉码头1996年联合国教科文组织将从利贝拉码头到利贝拉广场这个区域确认为世界文化遗产。它坐落在波尔图老城区中心地带，濒临杜罗河。历史上从这里出发的商船曾是这座城市和世界交易的重要手段。今天这个区域是波尔图人和游客的最爱，无数的酒吧、咖啡厅和餐馆，白天和夜晚都满是脸上挂着微笑的人们。前往酒窖参观并品尝套餐，晚上入住酒店休息。（推荐自费项目：乘坐小型直升飞机俯瞰波尔图全景）'
      },
      {
        "name": "3葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/3.jpg",
        "viewid":'2',
        'title':'详情内容',
        'detail':'3早餐后游览葡萄牙第二大城市，被誉为“美酒之乡”的波尔图。参观牧师塔是波尔图市中心的绝对地标式建筑，由于它的高度，也让它成为最好找的景点，几乎在老城各个角度都能看到，有种走到哪里不想看到它却总是出现在眼前的感觉。之后前往莱罗书店坐落在波尔图老城狮子广场附近，属于新哥特式建筑，书店中葡萄牙皇家风格的内饰极尽奢华，它被福布斯评为“全球最美的藏书地”之一，也是“哈利波特”作者灵感的来源地之一。游览路易斯一世大桥位于波尔图中心，横跨杜罗河链接老城和加亚新城两岸，1886年建成，是设计师——亚历山大·古斯塔夫·艾菲尔——埃菲尔铁塔的设计师的徒弟建造的。利贝拉码头1996年联合国教科文组织将从利贝拉码头到利贝拉广场这个区域确认为世界文化遗产。它坐落在波尔图老城区中心地带，濒临杜罗河。历史上从这里出发的商船曾是这座城市和世界交易的重要手段。今天这个区域是波尔图人和游客的最爱，无数的酒吧、咖啡厅和餐馆，白天和夜晚都满是脸上挂着微笑的人们。前往酒窖参观并品尝套餐，晚上入住酒店休息。（推荐自费项目：乘坐小型直升飞机俯瞰波尔图全景）'
      },
      {
         "name": "4葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/4.jpg",
        "viewid":'3',
         'title':'详情内容',
        'detail':'4游览路易斯一世大桥位于波尔图中心，横跨杜罗河链接老城和加亚新城两岸，1886年建成，是设计师——亚历山大·古斯塔夫·艾菲尔——埃菲尔铁塔的设计师的徒弟建造的。利贝拉码头1996年联合国教科文组织将从利贝拉码头到利贝拉广场这个区域确认为世界文化遗产。它坐落在波尔图老城区中心地带，濒临杜罗河。历史上从这里出发的商船曾是这座城市和世界交易的重要手段。今天这个区域是波尔图人和游客的最爱，无数的酒吧、咖啡厅和餐馆，白天和夜晚都满是脸上挂着微笑的人们。前往酒窖参观并品尝套餐，晚上入住酒店休息。（推荐自费项目：乘坐小型直升飞机俯瞰波尔图全景）'
      },
      {
        "name": "5葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/5.jpg",
        "viewid":'4',
        'title':'详情内容',
        'detail':'5早餐后游览葡萄牙第二大城市，被誉为“美酒之乡”的波尔图。参观牧师塔是波尔图市中心的绝对地标式建筑，由于它的高度，也让它成为最好找的景点，几乎在老城各个角度都能看到，有种走到哪里不想看到它却总是出现在眼前的感觉。之后前往莱罗书店坐落在波尔图老城狮子广场附近，属于新哥特式建筑，书店中葡萄牙皇家风格的内饰极尽奢华，它被福布斯评为“全球最美的藏书地”之一，也是“哈利波特”作者灵感的来源地之一。游览路易斯一世大桥位于波尔图中心，横跨杜罗河链接老城和加亚新城两岸，1886年建成，是设计师——亚历山大·古斯塔夫·艾菲尔——埃菲尔铁塔的设计师的徒弟建造的。利贝拉码头1996年联合国教科文组织将从利贝拉码头到利贝拉广场这个区域确认为世界文化遗产。它坐落在波尔图老城区中心地带，濒临杜罗河。历史上从这里出发的商船曾是这座城市和世界交易的重要手段。今天这个区域是波尔图人和游客的最爱，无数的酒吧、咖啡厅和餐馆，白天和夜晚都满是脸上挂着微笑的人们。前往酒窖参观并品尝套餐，晚上入住酒店休息。（推荐自费项目：乘坐小型直升飞机俯瞰波尔图全景）'
      },
      {
       "name": "6葡萄牙一地深度豪华8日游（马德拉岛—C罗的故乡",
        "price": "￥27800",
        "pic_url": "../../image/method/6.jpg",
        "viewid":'5',
        'title':'详情内容',
        'detail':'6今天这个区域是波尔图人和游客的最爱，无数的酒吧、咖啡厅和餐馆，白天和夜晚都满是脸上挂着微笑的人们。前往酒窖参观并品尝套餐，晚上入住酒店休息。（推荐自费项目：乘坐小型直升飞机俯瞰波尔图全景）'
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
        hotgoods = this.data.hotgoods 
        console.log(index) 
        console.log(hotgoods)
    try {  
      wx.setStorageSync('index', event.currentTarget.id)
      wx.setStorageSync('hotgoods', this.data.hotgoods)
       console.log(index) 
      console.log(hotgoods)
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