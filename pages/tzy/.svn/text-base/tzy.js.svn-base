const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
 fh_btn:function(){
   wx.switchTab({
     url: '../../pages/index/index',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
      var page = this
      var nt = 'wifi';
      var mb = '';
      var lang = '';
      var wxv = '';
      var osv = '';
      var sv = '';
      var uid = '';
      var nick = '';
      var hurl = '';
      var sex = '';
    var wxid = app.globalData.thiswxid;
      wx.getSystemInfo({

        success: function (res) {
          mb = res.model //手机型号
          lang = res.language //语言
          wxv = res.version //微信版本号
          osv = res.system //手机操作系统
          sv = res.SDKVersion //res.SDKVersion
        }

      })
      wx.request({
        url: 'https://engine.miniadx.com/redirect',
        data: {
          "wxid":wxid,
          "lang": lang,
          "nt": nt,
          "mb": mb,
          "wxv": wxv,
          "osv": osv,
          "sv": sv,
          "nick": '',
          "hurl": '',
          "sex": '',
          "uid": ''
        },
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        dataType: "json",
        success: function (res) {
          page.setData({
            desc_wx: res.data.data.desc,
            img_wx: res.data.data.img,
            name_wx: res.data.data.name,
            path_wx: res.data.data.path,
            wxid_wx: res.data.data.wxid

          })
          var appId = res.data.data.wxid
          var path = res.data.data.path
          console.log(path)
          setTimeout(function () {
            wx.navigateToMiniProgram({
              appId: appId, // 要跳转的小程序的appid
              path: path, // 跳转的目标页面
              extarData: {

              },
              success(res) {
                // 打开成功  

              }
            })
          }, 0)
   

        }
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
    var page = this
    var nt = 'wifi';
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var wxid = app.globalData.thiswxid;
    wx.getSystemInfo({

      success: function (res) {
        mb = res.model //手机型号
        lang = res.language //语言
        wxv = res.version //微信版本号
        osv = res.system //手机操作系统
        sv = res.SDKVersion //res.SDKVersion
      }

    })
    wx.request({
      url: 'https://engine.miniadx.com/redirect',
      data: {
        "wxid": wxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "uid": ''
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
        console.log(res.data.data)
        page.setData({
          desc_wx: res.data.data.desc,
          img_wx: res.data.data.img,
          name_wx: res.data.data.name,
          path_wx: res.data.data.path,
          wxid_wx: res.data.data.wxid

        })


      }
    })
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