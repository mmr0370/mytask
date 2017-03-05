// page/method/detail.js
Page({
  data:{
    index:'',
    hotgoods:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
 try {
  var index = wx.getStorageSync('index')
  var hotgoods = wx.getStorageSync('hotgoods')
  if (hotgoods&&index) {
      // Do something with return value
      this.setData({
         hotgoods:hotgoods,
         index:index
      })
  }
} catch (e) {
  // Do something when catch error
}
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})