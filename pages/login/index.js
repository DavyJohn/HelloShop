// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title1:'申请获取以下权限',
     title2:'获取您的公开信息（昵称、头像等）',
     title3:'确认授权'
  },
  getUserInfo:function(res){
    
    const {userInfo} = res.detail;
    console.log(userInfo);
    if(userInfo){
      console.log("缓存userinfo")
      wx.setStorageSync('userinfo', {time:Date.now(),data:userInfo})
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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