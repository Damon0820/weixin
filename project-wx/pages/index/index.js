//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    n: 0,
    scrolly: '600px',
    imgUrls: [
      'http://www.dmly.online/img/music_poster/chimney01.jpg',
      'http://www.dmly.online/img/music_poster/chimney03.jpg',
      'http://www.dmly.online/img/music_poster/chimney04.jpg',
      'http://www.dmly.online/img/music_poster/chimney05.jpg',
      'http://www.dmly.online/img/music_poster/chimney06.jpg',
      'http://www.dmly.online/img/music_poster/chimney07.jpg',
      'http://www.dmly.online/img/music_poster/chimney08.jpg',
      'http://www.dmly.online/img/music_poster/chimney09.jpg',
      'http://www.dmly.online/img/music_poster/chimney10.jpg',
      'http://www.dmly.online/img/music_poster/chimney11.jpg',
      'http://www.dmly.online/img/music_poster/chimney12.jpg'
    ]
  },
  onLoad:function(options){
    // scroll的高度的设定
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrolly: res.windowHeight+'px'
        })
     
      },
      fail: function( res ){
        console.log('获取设备信息失败')
      }
    })
  }
})
