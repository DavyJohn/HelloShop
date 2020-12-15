// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myaddress:{},
    userName:''
    
  },

  getAddress(){
    // wx-wx.getSetting({
    //   withSubscriptions: true,
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })
    wx.chooseAddress({
      success: (result)=>{
        this.setData({
          myaddress:result
        })
        wx.setStorageSync("myAddress", result);
     
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const address = wx.getStorageSync("myAddress");
     
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