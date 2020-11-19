export const request =(params)=>{
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     url : baseUrl+params.url,
     success:(result)=>{
       if(result.data.meta.status == "200" ){
          console.log("成功获取数据"),
          resolve(result.data.message)
       }
       
     },
     fail:(err)=>{
       reject(err);
     }
    });
  })
}