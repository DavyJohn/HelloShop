import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:'综合',
        isActive:true
      },{
        id:1,
        value:'销量',
        isActive:false
      },{
        id:2,
        value:'价格',
        isActive:false
      }
    ],
    googsListData : []
  },
  //接口参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:"1",
    pagesize:"10"
  },
  //这是总页数也是全局变量
  totalPages:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.QueryParams.cid=options.cid,
    this.getGoodsListData()
   
  },
  async getGoodsListData(){

    const res = await request({url:"/goods/search",data:this.QueryParams});
    //获取总条数，
    const totals = res.total;
    //总页数=总条数/页容量
    this.totalPages = Math.ceil(totals/this.QueryParams.pagesize);
    console.log(this.totalPages);
    console.log(res);
    const {goods} = res;
    console.log(goods);
    this.setData({
      googsListData:[...this.data.googsListData,...goods]
      
    })
    console.log(this.data.googsListData)
  },

  tabsItemChnages(e){
   
    const {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i) => {
      i==index?v.isActive = true:v.isActive=false
    });
    
    this.setData({
      tabs
    })
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
    console.log("我现在在底部");
    if(this.QueryParams.pagenum<= this.totalPages){
      //当前页小于等于总页数，那就开启加载下一页
      this.QueryParams.pagenum++;
      this.getGoodsListData();
    }else{

    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})