//如果出现几个请求同时调用，为了使得我们的加载的图标显示正常我们需要使用计数来做优化
let ajaxTimes =0;
export const request =(params)=>{
  ajaxTimes++;
  wx.showLoading({
    title:'加载中...' ,
    mask: true,
  });
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    
    wx.request({
     ...params,
     url : baseUrl+params.url,
     success:(result)=>{
       if(result.data.meta.status == "200" ){
          
          resolve(result.data.message)
       }
       
     },
     fail:(err)=>{
       reject(err);
     },
     complete:()=>{
       ajaxTimes--;
       if(ajaxTimes === 0){
         wx.hideLoading();
       }
     }
    });
  })
}