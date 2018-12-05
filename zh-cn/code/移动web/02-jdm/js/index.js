// 头部渐变
;(function () {
  var header = document.querySelector('.header')
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset
    // console.log(scrollTop)
    if (scrollTop < 500) {
      header.style.background = `rgb(242, 48, 48, ${scrollTop / 500 * 0.9})`
    } else {
      header.style.background = `rgba(242, 48, 48, .9)`
    }
  })
})()

// 倒计时
;(function () {
  var spans = document.querySelectorAll('.seckill .time span:nth-child(odd)')
  // console.log(spans)
  setTime()
  var timeId = setInterval(function () {
    setTime()
  }, 1000)

  function setTime () {
    var date = new Date
    var seckillDate = new Date('2018/12/2 17:34:00')
    var time = seckillDate - date
    // console.log(time)
    if (time <= 0) {
      clearInterval(timeId)
      return
    }
    // console.log(time)
    var hours = parseInt(time / 1000 / 60 / 60)
    var minutes = parseInt(time / 1000 / 60) % 60
    var seconds = parseInt(time / 1000) % 60
    // console.log(hours, minutes, seconds)
    spans[0].innerText = addZero(hours)
    spans[1].innerText = addZero(minutes)
    spans[2].innerText = addZero(seconds)
  }

  function addZero (n) {
    n = n < 10 ? '0' + n : n
    return n
  }
})()


// 快报轮播
;(function () {
  var ul = document.querySelector('.news .newList ul')
  var lis = document.querySelectorAll('.news .newList li')
  var index = 0
  var liHeight = lis[0].offsetHeight
  // console.log(liHeight)

  setInterval(function () {
    index++

    // 如果将判断写在这里，根据浏览器的工作原理，会造成代码覆盖
    // if (index >= lis.length -1) {
    //   index = 0
    //   ul.style.transition = 'none'
    //   ul.style.transform = `translateY(${-index * liHeight}px)`
    // }

    ul.style.transition = '.2s'
    ul.style.transform = `translateY(${-index * liHeight}px)`
  }, 2000)

  // 过渡结束事件
  ul.addEventListener('transitionend', function () {
    if (index >= lis.length -1) {
      index = 0
      ul.style.transition = 'none'
      ul.style.transform = `translateY(${-index * liHeight}px)`
    }
  })
})()


// 图片轮播
/*
  图片轮播图功能
    1. 轮播图能动起来
      1.1 获取到对象   一个li的宽度
      1.2 开启一个定时器， 让index++ ，设置ul的translateX
      1.3 给ul注册一个过渡结束事件， 判断如果是最后一张，瞬间切回来
    2. 同步小圆点
    3. 轮播图支持滑动功能
    4. 快速滑动
    5. 支持改变窗口大小
*/

;(function () {
  var banner = document.querySelector('.banner')
  var ul = banner.querySelector('ul')
  var lis = ul.querySelectorAll('li')

  // 小圆点
  var dots = banner.querySelectorAll('ol li')

  // 轮播图宽度
  var lisWidth = lis[0].offsetWidth

  // 记录轮播图的li的下标
  var index = 1

  // 轮播图切换间隔
  var interval = 2000

  // 过渡持续时间
  var duration = '.2s'

  // 轮播定时器
  var timeId = setInterval(play, interval)

  // 过渡结束事件
  ul.addEventListener('transitionend', function () {
    // 调整index
    if (index >= lis.length - 1) {
      index = 1
    }
    if (index <= 0) {
      index = lis.length -2
    }

    // 移除过渡
    ul.style.transition = 'none'
    ul.style.transform = `translateX(${-index * lisWidth}px)`

    // 同步小圆点
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove('now')
    }
    dots[index - 1].classList.add('now')
  })

  // 轮播图支持滑动
  // 触摸时位置，开始触摸时间，触摸结束时间
  var startX
  var startTime
  var endTime

  // 注册触摸开始事件
  banner.addEventListener('touchstart', function (e) {
    startTime = new Date
    clearInterval(timeId)
    startX = e.touches[0].clientX
    // console.log(startX)
  })

  // 注册触摸移动事件
  banner.addEventListener('touchmove', function (e) {
    var distance = e.changedTouches[0].clientX - startX

    // 移除过渡
    ul.style.transition = 'none'
    ul.style.transform = `translateX(${-index * lisWidth + distance}px)`
  })

  // 注册触摸结束事件
  banner.addEventListener('touchend', function (e) {
    endTime = new Date
    var time = endTime - startTime
    var distance = e.changedTouches[0].clientX - startX

    // 滑动距离大于1/3 或滑动距离大于100 但时间小于120ms
    if (distance > lisWidth / 3 || distance > 100 && time < 120) {
      // 右移
      index--
    }
    if (distance < -lisWidth / 3|| distance < -100 && time < 120) {
      // 左移
      index++
    }

    // 添加过渡
    ul.style.transition = duration
    ul.style.transform = `translateX(${-index * lisWidth}px)`

    // 重新开启定时器
    timeId = setInterval(play, interval)
  })

  // resize事件，重新获取lisWidth 重新设置 ul 的translateX
  window.addEventListener('resize', function () {
    lisWidth = lis[0].offsetWidth
    ul.style.transform = `translateX(${-index * lisWidth}px)`
  })


  // 轮播动画函数
  function play () {
    index++
    // console.log(index)
    ul.style.transition = duration
    ul.style.transform = `translateX(${-index * lisWidth}px)`
  }
})()
