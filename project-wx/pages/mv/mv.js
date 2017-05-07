// pages/mv/mv.js
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
    data: {
      scrolly: '200px',
      current:0,
      mvPlay: {},
      mvList: [{
        id: 0,
        name: '漫步人生路',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney06.jpg',
        src: 'http://www.dmly.online/mv/mbrsl.mp4',
      },{
        id: 1,
        name: '伦家也害羞',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney03.jpg',
        src: 'http://www.dmly.online/mv/ljyhx.mp4',
      },{
        id: 2,
        name: '好莱坞chimney',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney13.jpg',
        src: 'http://www.dmly.online/mv/hlwchimney1.mp4',
      },{
        id: 3,
        name: '三生三世',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney05.jpg',
        src: 'http://www.dmly.online/mv/jwxka1.mp4',
      },{
        id: 4,
        name: '十里桃花',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney01.jpg',
        src: 'http://www.dmly.online/mv/jwxka2.mp4',
      },{
        id: 5,
        name: '理想三旬',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney07.jpg',
        src: 'http://www.dmly.online/mv/jwxka3.mp4',
      },{
        id: 6,
        name: '因为刚好遇见你',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney08.jpg',
        src: 'http://www.dmly.online/mv/jwxka4.mp4',
      },{
        id: 7,
        name: '告白气球',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney09.jpg',
        src: 'http://www.dmly.online/mv/jwxka5.mp4',
      },{
        id: 8,
        name: '童话镇的小姑凉',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney12.jpg',
        src: 'http://www.dmly.online/mv/jwxka6.mp4',
      },{
        id: 9,
        name: '今天你就嫁了啦',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney04.jpg',
        src: 'http://www.dmly.online/mv/jtnjjll.mp4',
      },{
        id: 10,
        name: '爱笑的眼睛',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney14.jpg',
        src: 'http://www.dmly.online/mv/axdyj.mp4',
      },{
        id: 11,
        name: '嘟嘟嘟',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney10.jpg',
        src: 'http://www.dmly.online/mv/ddd.mp4',
      },{
        id: 12,
        name: '医生我牙疼',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney16.jpg',
        src: 'http://www.dmly.online/mv/yswyt.mp4',
      },{
        id: 13,
        name: '我的嘴唇pose',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney11.jpg',
        src: 'http://www.dmly.online/mv/wdzcpose.mp4',
      },{
        id: 14,
        name: '谁说剪刀土了',
        author: 'chimney',
        poster: 'http://www.dmly.online/img/music_poster/chimney15.jpg',
        src: 'http://www.dmly.online/mv/ssjdtl.mp4',
      }],
        
    danmuList: [
      {
        text: '',
        color: '',
      }]
    },
  onLoad: function(){
    //请求mv数据
    var that=this;
    wx.request({
      url: 'http://www.dmly.online/php/mv.php',
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          mvList: res.data
        })
      }
    })

    //初始状态播放列表第一个mv
    this.setData({
      mvPlay: this.data.mvList[this.data.current]
    })

    // scroll的高度的设定
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        that.setData({
          scrolly: (res.windowHeight-288)+'px'
        })
     
      },
      fail: function( res ){
        console.log('获取设备信息失败')
      }
    })
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front','back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  //点击列表播放
  play: function(ev){
    var that=this;    
    this.setData({
      current: ev.currentTarget.id,
      mvPlay: this.data.mvList[ev.currentTarget.id]
    })
    setTimeout(function(){
      that.videoContext.seek(0);
      that.videoContext.play();
    },1000)
    console.log(this.videoContext)
    
  }
})