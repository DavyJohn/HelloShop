// pages/cart/index.js

import {chooseAddress,getSetting,openSetting} from "../../utils/syncwx.js"
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myaddress:{},
    userName:'',
    cartList:[],
    allNum:0,
    allPrice:0,
    allCheck:true
    
  },
  //点击收货地址
  async getAddress(){
    const res1 = await getSetting();
    console.log(res1)
    const scopeAddress = res1.authSetting['scope.address'];
    console.log(scopeAddress)
    if(scopeAddress === false  ){
      console.log('诱导用户进入设置')
      await openSetting();
    }
    const myaddress = await chooseAddress();
    this.setData({
      myaddress:myaddress
    })
    console.log('执行缓存处理')
    wx.setStorageSync("myAddress", this.data.myaddress);
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
      
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
    
    this.data.allNum =0,
    this.data.allPrice = 0;
    console.log('onShow')
    const address = wx.getStorageSync("myAddress");
    console.log('收到缓存信息为：'+address)
    if(address === undefined){
      console.log('当前没有缓存')
    }else{
      console.log('当前有缓存')
      console.log(address)
      this.setData({
        myaddress:address,
        userName:address.userName
      })
      
      console.log('测试一下用户名'+this.data.userName)
    }
    //获取购物车本地缓存的数据 ,如果 不存在这个cartList  那么就默认为一个空的数组
    const cartList = wx.getStorageSync("cart")||[];
    if(cartList !== undefined){
      this.setData({
        cartList:cartList
      })
   
    }
  },
  /**
   * 列表中checkbox点击
   */
  changeItem(e){
    const  cartList = this.data;
    const goods_id = e.currentTarget.dataset.id;
 //底部工具栏中check的状态默认是全部选中，如果 其中一个商品的checked的状态为false那么全部选中的状态就为false
    const index = cartList.findIndex(v.goods_id === goods_id);//返商品id相同 的下标
    

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