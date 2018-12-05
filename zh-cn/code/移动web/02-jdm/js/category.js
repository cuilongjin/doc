// iscroll 插件
// main 部分滑动
var main = document.querySelector('.content .main')
new IScroll(main)

// nav 滑动
var nav = document.querySelector('.nav')
var ul = nav.querySelector('ul')
var startY
var total = 0

nav.addEventListener('touchstart', function (e) {
  startY = e.touches[0].clientY
})

nav.addEventListener('touchmove', function (e) {
  var distance = total + e.touches[0].clientY - startY
  ul.style.transition = 'none'
  ul.style.transform = `translateY(${distance}px)`
})

nav.addEventListener('touchend', function (e) {
  var distance = total + e.changedTouches[0].clientY - startY
  total = distance

  if (total > 0) {
    total = 0
    ul.style.transition = '.2s'
    ul.style.transform = `translateY(0)`
  }

  if (total < nav.offsetHeight - ul.offsetHeight) {
    total = nav.offsetHeight - ul.offsetHeight
    ul.style.transition = '.2s'
    ul.style.transform = `translateY(${total}px)`
  }
})

