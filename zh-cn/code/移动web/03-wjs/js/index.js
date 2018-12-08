// 轮播图基本功能
$(function () {
  var $banner = $('.banner')
  var $img = $('.banner .item img')
  $(window).on('resize', function () {
    var $bannerWidth = $banner.width()
    // console.log(bannerWidth)
    /* if (bannerWidth < 600) {
      img.each(function () {
        $(this).attr('src', $(this).data('msrc'))
      })
    } else {
      img.each(function () {
        $(this).attr('src', $(this).data('psrc'))
      })
    } */
    // 优化
    $img.each(function () {
      $(this).attr('src', $bannerWidth < 600 ? $(this).data('msrc') : $(this).data('psrc'))
    })
  })
  $(window).trigger('resize')
})

// 轮播图滑动功能
$(function () {
  var $banner = $('.banner')
  var $startX
  $banner.on('touchstart', function (e) {
    // console.log(e.originalEvent.touches[0].clientX)
    $startX = e.originalEvent.touches[0].clientX
  })
  $banner.on('touchend', function (e) {
    var $distance = e.originalEvent.changedTouches[0].clientX - $startX
    // console.log($distance)
    if ($distance > 100) {
      $(this).carousel('prev')
    }
    if ($distance < -100) {
      $(this).carousel('next')
    }
  })
})

// 动态计算product nav的宽度
$(function () {
  var $nav = $('.product .nav-tabs')
  var $li = $('.product .nav-tabs li')
  var $totalWidth = 0
  $li.each(function () {
    $totalWidth += $(this).width()
  })
  $nav.width($totalWidth)

  // product nav 滑动
  new IScroll('.nav-wrapper', {
    scrollX: true,
    scrollY: false
  })
})

