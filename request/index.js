export const request =(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     success:(result)=>{
      console.log(params);
       resolve(result);
     },
     fail:(err)=>{
       reject(err);
     }
    });
  })
}