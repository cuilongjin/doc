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

// banner
;(function () {
  var banner = document.querySelector('.banner')
  var ul = document.querySelector('.banner ul')
  var lis = document.querySelectorAll('.banner li')

  // 动态设置li的宽度
  setLisWidth()
  window.addEventListener('resize', function () {
    setLisWidth()
  })

  function setLisWidth () {
    var bannerWidth = banner.offsetWidth
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.width = `${bannerWidth}px`
    }
    ul.style.width = `${bannerWidth * lis.length}px`
  }

  var spans = ''
  for (var i = 0; i < lis.length; i++) {
    spans += `<span></span>`
  }
  console.log(spans)
  var dot = document.querySelector('.dot')
  dot.innerHTML = spans
})()
