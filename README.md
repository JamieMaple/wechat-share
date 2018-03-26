# 微信分享测试

### 参考去年夏老师写的分享
``` javascript
/* eslint-enable */
/**
 * 微信分享设置
 */

$(() => {
  const wx = window.wx
  const shareLink = window.location.href
  // shareLink = encodeURIComponent(shareLink)

  Ajax('post', 'http://weixin.bingyan-tech.hustonline.net/balloon/api/v1/jsapi', JSON.stringify({ url: shareLink }), (res) => {
    const data = JSON.parse(res).data
    wx.config({
      debug: false,
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'],
    })
  })
  wx.ready(() => {
    // body...
    const share = {
      title: '这是全国首个用H5招生的大学',
      desc: '在华中科技大学，你可以实现你所有可能。',
      img: 'http://weixin.bingyan-tech.hustonline.net/admission/static/image/share_img.jpg',
    }
    wx.onMenuShareTimeline({
      title: share.title, // 分享标题
      link: shareLink, // 分享链接
      imgUrl: share.img, // 分享图标
      success() {
      },
    })
    wx.onMenuShareAppMessage({
      title: share.title, // 分享标题
      desc: share.desc, // 分享描述
      link: shareLink, // 分享链接
      imgUrl: share.img, // 分享图标
      success() {
      },
    })
  })
})
```

### 测试代码如下

> http://qydev.weixin.qq.com/wiki/index.php?title=%E5%BE%AE%E4%BF%A1JS-SDK%E6%8E%A5%E5%8F%A3#.E6.A6.82.E8.BF.B0


1. 先引入微信 jssdk （script or cmd）

2. 同源请求 [接口](`https://weixin.bingyan-tech.hustonline.net/service/resources/signature`)

3. 获取 signature，timestamp 以及 **nonce_str**

4. wx.config 传入 debug, signature, timestamp, jsApiList 以及 **nonceStr**，写死 appId

5. config 认证成功后回回调 ready 传入的函数
