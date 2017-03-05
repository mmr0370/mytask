// page/method/detail.js
Page({
  data:{
    winWidth: 0,  
    winHeight: 0,  
    currentTab: 0, 
    indicatorDots: true,  
    autoplay:true,  
    interval:2000,  
    duration:2000,
    image_url:[],
    index:'',
    hotgoods:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;  
     wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
          
        });  
         console.log(res.windowWidth, res.windowHeight,wx.getStorageSync('sub'))
      }  
 
    });  
 try {
  var index = wx.getStorageSync('index'),
      hotgoods = wx.getStorageSync('hotgoods'),
      a=wx.getStorageSync('a'),
      b=wx.getStorageSync('b'),
      c=wx.getStorageSync('c')
  var image_url=[a,b,c]
 
  if (hotgoods&&index) {
      // Do something with return value
      this.setData({
         hotgoods:hotgoods,
         index:index,
         image_url:image_url
      })
      console.log(image_url)
       console.log(this.data.hotgoods[index].banner_pic1)
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
  },
  swichNav: function(e) {  
   /** 
   * 点击tab切换 
   */ 
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
      console.log(e.target.dataset.current  )
    }
    },  
    bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },   
 
})