//index.js
//获取应用实例
var app = getApp()
//input.js
Page({
    data: {
         list:[{
   	 		id:0,
   	 		name:'学历',
   	 		count:1,
            edu: ['博士', '硕士', '本科', '大专','大专以下']
   	 },{
   	 		id:1,
   	 		name:'性别',
   	 		count:6,
            sex: ['男', '女']
   	 },{
   	 		id:2,
   	 		name:'年龄',
   	 		count:12
   	 },{
   	 		id:3,
   	 		name:'基础',
   	 		count:5
   	 },{
   	 		id:4,
   	 		name:'专业',
   	 		count:12
   	 },{
   	 		id:3,
   	 		name:'逻辑',
   	 		count:5
   	 }],
        edu: ['博士', '硕士', '本科', '大专','大专以下'],
        sex: ['男', '女'],
        age: ['0-18岁', '18-24岁','25-30岁','30以上'],
        base: ['无基础', '绘画基础','网络相关','原型设计'],
        major: ['无专业', '计算机相关','理工科','文科'],
        logic: ['渣渣', '普通','卓越'],
        index: 0,
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.currentTarget.id,e.detail.value)
        var sub,id,obj
        var obj=[]
        var objArr=[[0,0],[0,0],[0,0],[0,0],[0,0]]
        this.setData({
            index: e.detail.value
        })
         sub=e.detail.value
        id=e.currentTarget.id
        obj[0]=id
        obj[1]=sub
        console.log(obj)
        objArr[id][0]=id
        objArr[id][1]=sub
        objArr.push(obj)
        console.log(objArr)
        wx.setStorageSync('sub', sub)
        wx.setStorageSync('id', id)
    }
   
})
