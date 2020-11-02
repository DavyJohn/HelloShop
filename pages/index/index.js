//index.js
//获取应用实例
const app = getApp()
import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({
  data: {
    bannerList:[],
    cateList:[],
    floorList:[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    console.log("开启获取轮播图");
    const banner = wx.getStorageSync('bannerdata');
    if(!banner){
      console.log("没有缓存进行网络请求"),
      this.getBanner()
    }else{
      console.log("有缓存进行过期判断");
      if(Date.now()-banner.time>1000*60*60){
        console.log("过期重新请求");
        this.getBanner()
      }else{
        console.log("没过期直接获取缓存数据"+banner);
        this.setData({
          bannerList:banner.data
        })
      }
     
    }
   
    //获取首页分类数据（参照轮播图可以进行优化缓存）
    this.getCateList(),  //进行网络优化async
    //获取楼层数据
    this.getFloorData()
  },
 // 获取轮播图数据
  getBanner:function(){
    request({url:"/home/swiperdata"})
    .then(result => {
      wx.setStorageSync("bannerdata", {time:Date.now(),data:result}),
      console.log("输出轮播图信息"),
      this.setData({
        bannerList:result
      })
    }) 
  },
  //获取首页分类数据
  async getCateList(){
    const result = await request({url:"/home/catitems"});
    console.log(result);
    //进行网络本地缓存
    wx.setStorageSync('CateList', {time:Date.now(),data:result});
    this.setData({
      cateList:result
    })
    // request({url:"/home/catitems"})
    // .then(result =>{
    //   this.setData({
    //     cateList:result
    //   })
    // })
  },
//获取楼层数据
  getFloorData:function(){
    request({url:"/home/floordata"})
    .then(result=>{
      this.setData({
        floorList:result
      })
    })
}

})
