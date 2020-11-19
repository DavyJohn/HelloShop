// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabchanges:function(e){
      //获取传递的值
      const {index} = e.currentTarget.dataset;
      //自定义方法tabsItemChnages 拿到的属性值为index
      this.triggerEvent("tabsItemChnages",{index})
    }
  }
})
