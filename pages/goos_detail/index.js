import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
// pages/goos_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collecturl:'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjA1ODMzNDkwNDg4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4MzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjY4LjAxODg3MDM1IDg5MS43NzMyMjAwMWMtOC41OTUxNDczMSAwLTE4LjI0OTQ3MTY3LTIuNDY0NDUxNDItMjcuMjExNjAxNDQtNi45NDUyMTc5NUw1MTIuOTM2ODQ5NTcgODIwLjg3MjIwNTU4IDM4NC4yNzIxOTY2MyA4ODQuNzI1OTYzMDNjLTguMTQ3MDEwOTggNC4zMzgxNTA1Ny0xNy40NzYxMjMyMyA2LjYyMDAwNTg1LTI2Ljk4NzgzMTY0IDYuNjIwMDA1ODRhNTcuNDM3ODI5NjcgNTcuNDM3ODI5NjcgMCAwIDEtMzQuMzQwNjA5MDEtMTEuMjQzMzg4MzNjLTE4LjAwNDgxNjY4LTEzLjUwMzc2MTY5LTI3LjIzMTg4OTktMzYuOTA3MDk5NDUtMjIuOTc0ODkzMTctNTguMjExNzc0ODNsMjYuMzE1MzI4OC0xMzYuNTA2NzQwMjgtMTAwLjg2MjI5OTIzLTk0LjAxOTEyMDI4QTYyLjEwMjM4NTc5IDYyLjEwMjM4NTc5IDAgMCAxIDIwOS43MzgzMTQ0NSA1MzEuMzAwMzU2MzRsMC4yMDQwNzgwNS0wLjY5MjE5NDU4YzcuMzMyNDg4OS0yMS45NzcxNzgyMyAyNS41MjEwOTUxOC0zNy4zNzU1MjQyMyA0Ny41Nzk0MjcyNS00MC4zMjkyODU2NWwxNDAuMTMxODExMDctMjUuNDc5OTIxNTNMNDYwLjU1MDg0Njk3IDMzNy4wNTAyNjYwMmMxMC4xMDI0NjA3LTIwLjIyNTIwOTg2IDMwLjY1MzQ3OTM2LTMzLjIxOTk2OTgyIDUyLjM4NjU5OTMxLTMzLjIxOTk2OTgyIDIyLjY2OTM3MjgxIDAgNDMuNzUwODc1MDkgMTMuNDgzNDczMjQgNTIuNTkwMDgwNjcgMzMuNTg2OTUyMzJsNjIuNjkzMTM4MDggMTI3LjM0MDUzMjQyIDE0MC4xNTIwOTk1NSAyNC41MDMwOTE3NmE1Ny4wOTE3MzIzOCA1Ny4wOTE3MzIzOCAwIDAgMSA0Ni43MDQwMzk3OSA0MC43OTcxMTM3MSA1OS4wNjc0NzA1NSA1OS4wNjc0NzA1NSAwIDAgMS0xNC42MDQxMTI0MiA2MC4yNjg2NjY4NGwtMC4zNDYwOTcyOSAwLjM0NjA5NzMxLTEwMC41NzcwNjczMSA5NC43MTEzMTQ4NyAyNS40MTkwNTYxNSAxMzYuNzUxMzk1MjdjNC4wOTM0OTU1OSAyMS44NzUxMzkxOS00LjYwMzA5NDAxIDQzLjk1NDM1NjQ1LTIyLjcxMDU0NjQ3IDU3LjcyMjQ2NDg1YTUzLjg3MzYyNDI1IDUzLjg3MzYyNDI1IDAgMCAxLTM0LjIzODU2OTk2IDExLjkxNTI5NDQ2ek01MTIuOTk4MzExNjggNzgzLjY4MDQ3MDkybDE0Mi42NzgwMTMwOCA3MS4zNDkxNTA3N2M0LjE5NTUzNDYxIDIuMTE4MzU0MTMgOS4wMjIzOTg0NCAzLjQ0MTg3NzkzIDEyLjMyMjI1NzEzIDMuNDQxODc3OTMgNS4wOTI0MDM5OSAwIDkuODE3MjI4NzgtMS41NjgxNzg3OCAxMy4yNzk5OTE4OC00LjQ2MDQ3ODA3bDAuNjUxNjE3NjgtMC41MjkyOTAxOGM4LjEwNjQzNDA2LTYuMDkwMTE4OTUgMTIuMDU3OTEwNDEtMTUuNzQ0NDQzMzIgMTAuMjg2MjUwMjktMjUuMjE1NTc0OGwtMjguNzE4OTE0ODUtMTU0LjY3NTA1ODA5TDc3Ny4wNjg3NTc0NyA1NjYuNjM4NjgwM2M2Ljk2NjEwMzE0LTcuMDY3NTQ1NDUgOS4zNDg4MDM5OS0xNy4xOTAyOTQ2MSA2LjI1MzYyMDA3LTI2LjQ5ODUyMTY4bC0wLjMwNjExNzA3LTAuOTc4MDIzMmEyMy4zODI0NTI1OSAyMy4zODI0NTI1OSAwIDAgMC0xOS40MTA2ODc3OC0xNi45MjU5NDc4N2wtMC42NTE2MTc2NS0wLjEwMTQ0MjMzLTE1Ny4xMzk1MDk1MS0yNy40NzY1NDQ4N0w1MzUuMDk3ODE3MzkgMzUxLjAwMTU2NzMzYy0zLjQ0MzA3MTM2LTguMDI0NjgzNDktMTIuNzUwNzAxNzEtMTMuODQ5ODU4OTktMjIuMTYwOTY3ODItMTMuODQ5ODU5LTkuMjQ2NzY0OTYgMC0xOC4wODY1NjcyNiA1Ljc4NDU5ODU4LTIyLjU2NzkzMDUgMTQuNzI1ODQzMTlMNDIwLjA5OTIzMzgzIDQ5NC41OTY3MzgyMyAyNjIuMTI0OTEzNzYgNTIzLjI5NTM2NDU5Yy05LjU5MzQ1ODk3IDEuMjAxNzkzMDMtMTcuMDQ4Mjc1MzcgNy41NzcxNDM4OC0yMC40OTAxNTMyOSAxNy41MTY3MDAxOC0yLjQ0NDE2Mjk1IDkuMDgzODYwNTUgMC40NDgxMzYzMyAyMC4wMjE3Mjg1MiA3LjEyOTAwNzU2IDI2Ljg0NTIxNTY4bDExMy42OTQxNTQ3OSAxMDUuOTU0MTA2NDktMjkuODM4OTU3MjkgMTU0Ljc1NjIxMTk0Yy0xLjc5MjU0NTMgOC45NDE4NDEzMyAyLjQ0NDE2Mjk1IDE5LjI0Nzc4MzM1IDEwLjI4NTY1MzU3IDI1LjEzMzgyNDI0IDMuOTMxMTg3OSAyLjk1Mzc2MTQgOS4wMjI5OTUxNyA0LjU4MjgwNTU2IDE0LjM1OTQ1NzQyIDQuNTgyODA1NTcgNC4xMTQzODA3NyAwIDguMDY1ODU3MTItMC45NTY1NDEzMSAxMS40NjcxNTgxMS0yLjc4OTY2MzU1bDAuNDg5MzEtMC4yODUyMzE5MSAxNDMuNzc3NzY3MDYtNzEuMzI4ODYyM3oiIHAtaWQ9IjI4NDAiPjwvcGF0aD48L3N2Zz4=',
    imageurl:'http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg',
    pics:[],
    goods_name:'',
    goods_price:'',
    goods_introduce:''
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
    const {goods_name} = res
    const {goods_price} =res
    const {goods_introduce} =res
    this.goodDetailData=res,
     //  wx.setStorageSync('goodsDetailData', {time:Date.now(),date:res});
     this.setData({
       pics,
       goods_name,
       goods_price,
       goods_introduce

     })
    
     console.log(this.data.pics)
   },
   //预览轮播图片
   handleSwiper:function(e){
     const urls = this.goodDetailData.pics.map(v=>v.pics_mid_url)
     const index = e.currentTarget.dataset.index;
   
     wx.previewImage({
       current: urls[index],
       urls: urls,
     });

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