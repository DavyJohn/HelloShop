export const getSetting=()=>{
    return new Promise((resolver,reject)=>{
        wx.getSetting({
            success: (result)=>{
                resolver(result)
            },
            fail: (err)=>{
                reject(reject)
            },
            complete: ()=>{}
        });
    })
}

export const chooseAddress=()=>{
    return new Promise((resolver,reject)=>{
        wx.chooseAddress({
            success: (result)=>{
                resolver(result)
            },
            fail: (err)=>{
                reject(reject)
            },
            complete: ()=>{}
        });
    })
}

export const openSetting=()=>{
    return new Promise((resolver,reject)=>{
        wx.openSetting({
          withSubscriptions: true,
          success: (result)=>{
            resolver(result)
        },
        fail: (err)=>{
            reject(reject)
        },
        complete: ()=>{}
        })
        
    })
}