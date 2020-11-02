// pages/cateforyx/index.js
import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
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
    //设置右侧页面滚回顶部设置
    srcollTop:0
  },
  // 申明一个全局变量
  Cates:[],
  
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    const cates =wx.getStorageSync('cates');
    console.log(cates);
    if (!cates) {
      this.getCates()
    } else {
      if(Date.now() - cates.time>1000*60*60){
        this.getCates()
      }else{
        this.Cates = cates.data,
        this.setData({
          leftCateList:this.Cates.map(v=>v.cat_name), //左边的item菜单
          rightCateList:this.Cates.map(v=>v.children),//获取右边所有的数据
          rightItemList:this.Cates[0].children
      }
    )
      }
    }
  },
 async getCates(){
  const result = await request({url:"/categories"});
  this.Cates = result,
  wx.setStorageSync("cates", {time:Date.now(),data:result})
  this.setData({
    leftCateList:this.Cates.map(v=>v.cat_name), //左边的item菜单
    rightCateList:this.Cates.map(v=>v.children),//获取右边所有的数据
    rightItemList:this.Cates[0].children,
    srcollTop:0
  } )
 },
  // getCates:function(){
  //   request({url:"/categories"})
  //   .then(result=>{
  //     this.Cates=result,
  //     wx.setStorageSync('cates',{time:Date.now(),data:this.Cates}),
  //     console.log(this.Cates)
  //     this.setData({
  //       leftCateList:this.Cates.map(v=>v.cat_name), //左边的item菜单
  //       rightCateList:this.Cates.map(v=>v.children),//获取右边所有的数据
  //       rightItemList:this.Cates[0].children,
  //       srcollTop:0
  //     })
   
  //   })
  // },
  onItemClick:function(e){
    this.setData({
      selOptions:e.currentTarget.dataset['index'],
      rightItemList : this.Cates[this.data.selOptions].children,
      
    })
  }
})