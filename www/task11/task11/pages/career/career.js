// redirect.js navigator.js
//获取应用实例  
var app = getApp()  
Page( {  
  data: {  
    /** 
        * 页面配置 
        */  
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0,    
  },  
  onLoad: function() {  
    var that = this;  
  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
          
        });  
         console.log(res.windowWidth, res.windowHeight,wx.getStorageSync('sub'))
      }  
 
    });  
    try{
      var sub,id
      sub=wx.getStorageSync('sub')
      id=wx.getStorageSync('id')
        if(sub){
            console.log(sub)
        }
    }catch(e){

    }
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
      console.log(e.target.dataset.current  )
    }  
  }  
})  

