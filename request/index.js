export const request =(params)=>{
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     url : baseUrl+params.url,
     success:(result)=>{
      console.log(params);
       resolve(result.data.message);
     },
     fail:(err)=>{
       reject(err);
     }
    });
  })
}