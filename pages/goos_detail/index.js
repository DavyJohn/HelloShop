import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
// pages/goos_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageurl:'http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg',
    pics:[]
  },
  //全局变量
  //商品详情
    goodDetailData:{},
  //携带的请求参数
  QueryParams:{
    goods_id:0
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.QueryParams.goods_id = options.goods_id;
    // const goodsDetail = wx.getStorageSync('goodsDetailData');
    // if(!goodsDetail){
    //   console.log('没有缓存')
    //   this.getGoodsDetailData(this.QueryParams);
    // }else if(Date.now()-goodsDetail.time>1000*60*60){
    //   console.log('缓存过期')
    //   this.getGoodsDetailData(this.QueryParams);
    // }else{
    //   this.goodDetailData = goodsDetail
    // }
    this.getGoodsDetailData(this.QueryParams);
   
  },
   //商品详情页面网络请求
   async getGoodsDetailData (params) {
     
     //使用缓存功能
     const res = await request({url:'/goods/detail',data:params})
     const {pics} = res
     this.goodDetailData=res,
     //  wx.setStorageSync('goodsDetailData', {time:Date.now(),date:res});
     this.setData({
       pics
     })
    
     console.log(this.data.pics)
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})