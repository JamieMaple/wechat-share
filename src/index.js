import wx from 'weixin-js-sdk'
import img from './components/img'
import welcome from './components/welcome'
import classNames from './style.scss'

// ts
fetch('https://weixin.bingyan-tech.hustonline.net/service/resources/signature')
  .then(data => data.json())
  .then((data) => {
    console.log(data)
    wx.config({
      debug: false,
      appId: data.appid,
      timestamp: data.timestamp,
      nonceStr: data.noncestr,
      signature: data.signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'],
    })
  })

const app = document.getElementById('app')
app.classList.add(classNames.app)

app.appendChild(img)
app.appendChild(welcome)

if (module.hot) {
  module.hot.accept()
}
