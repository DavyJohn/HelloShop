//index.js
//获取应用实例
const app = getApp()
import {request} from "../../request/index.js"
Page({
  data: {
    bannerList:[],
    cateList:[],
    floorList:[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getBanner(),
    //获取首页分类数据
    this.getCateList(),
    //获取楼层数据
    this.getFloorData()
  },
 // 获取轮播图数据
  getBanner:function(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result => {
      this.setData({
        bannerList:result.data.message
      })
    }) 
  },
  //获取首页分类数据
  getCateList:function(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result =>{
      this.setData({
        cateList:result.data.message
      })
    })
  },
//获取楼层数据
  getFloorData:function(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then(result=>{
      this.setData({
        floorList:result.data.message
      })
    })
}

})
