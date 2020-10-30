// pages/cateforyx/index.js

import {request} from "../../request/index.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
    //左侧的整体列表数据
    leftCateList:[],
    //右侧列表整体数据数据
    rightCateList:[],
    //点击的index
    selOptions:0,
    //右侧子项数据
    rightItemList:[],
  },
  // 申明一个全局变量
  Cates:[],
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates()
  },
  getCates:function(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"})
    .then(result=>{
      this.Cates=result.data.message
      console.log(this.Cates)
      this.setData({
        leftCateList:this.Cates.map(v=>v.cat_name), //左边的item菜单
        rightCateList:this.Cates.map(v=>v.children),//获取右边所有的数据
        rightItemList:this.Cates[0].children
      })
   
    })
  },
  onItemClick:function(e){
    this.setData({
      selOptions:e.currentTarget.dataset['index'],
      rightItemList : this.Cates[this.data.selOptions].children
    })
   
   
    
  }
})