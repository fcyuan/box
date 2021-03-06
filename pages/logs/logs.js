var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    list:[
      {
        tuijian_name: "封神单机版",
        tuijian_txt: "开局就是神，还玩什么鲲！",
        n: "1"
      },
     

    ]
    
  },
  qrclick: function (res) {
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [res.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })
  
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [res.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })

    var page = this
    var thiswxid = app.globalData.thiswxid;
    var curl = res.currentTarget.dataset.curl;
    var appid = res.currentTarget.dataset.wxid;
    var twxid = res.currentTarget.dataset.twxid;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var names = res.currentTarget.dataset.name;
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
      url: curl,
      data: {
        "wxid": thiswxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "appid": '',
        "uid": '',
        "name": names
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
      }
    })
  },
  yx_1:function(res){
    wx.previewImage({
      current: res.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [res.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })

    var page = this
    var thiswxid = app.globalData.thiswxid;
    var curl = res.currentTarget.dataset.curl;
    var appid = res.currentTarget.dataset.wxid;
    var twxid = res.currentTarget.dataset.twxid;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    var uid = '';
    var nick = '';
    var hurl = '';
    var sex = '';
    var names = res.currentTarget.dataset.name;
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
      url: curl,
      data: {
        "wxid": thiswxid,
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv,
        "nick": '',
        "hurl": '',
        "sex": '',
        "appid": '',
        "uid": '',
        "name": names
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      success: function (res) {
      }
    })
  },
  onLoad: function () {
    var that = this;
    var nt = app.globalData.nt;
    var mb = '';
    var lang = '';
    var wxv = '';
    var osv = '';
    var sv = '';
    wx.getNetworkType({
      success: function (res) {
        nt = res.networkType//网络类型
        console.log(nt)
      }
    })
    console.log(nt)

    wx.getSystemInfo({

      success: function (res) {
        mb = res.model//手机型号
        lang = res.language//语言
        wxv = res.version//微信版本号
        osv = res.system//手机操作系统
        sv = res.SDKVersion//res.SDKVersion
      }

    })
    // 获取系统信息 
    const swheight = this.data.list.length
    that.setData({
      clientHeight: swheight * 220 + 50
    })

    wx.request({
      // url: 'https://engine.miniadx.com/categories',
      url: util.domain +'/categories',
      data: {
        "lang": lang,
        "nt": nt,
        "mb": mb,
        "wxv": wxv,
        "osv": osv,
        "sv": sv

      },
      method: "POST",
      header: { 'content-type': 'application/json' },
      dataType: "json",
      success: function (res) {
        console.log(res.data.data.categories)
        that.setData({
          categories: res.data.data.categories,
          bg: res.data.data.categories[0].list[1].img,
          bgid: res.data.data.categories[0].list[1].wxid,
        })
        
        

      }
    })



  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
    
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }


}) 
