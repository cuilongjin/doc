;(function () {
  var allCheck = document.querySelector('.goods .title .good_icon')
  var itemCheck = document.querySelectorAll('.goods .item .good_icon')
  allCheck.addEventListener('click', function () {
    this.classList.toggle('checked')
    for (var i = 0; i < itemCheck.length; i++) {
      var isChecked = this.classList.contains('checked')? 'add' : 'remove'
      itemCheck[i].classList[isChecked]('checked')
    }
  })

  for (var i = 0; i < itemCheck.length; i++) {
    itemCheck[i].addEventListener('click', function () {
      this.classList.toggle('checked')

      var flag = true // 假定全选了
      for (var j = 0; j < itemCheck.length; j++) {
        if (!itemCheck[j].classList.contains('checked')) {
          flag = false
        }
      }

      allCheck.classList[flag ? 'add' : 'remove']('checked')
      // if (flag) {
      //   allCheck.classList.add('checked')
      // } else {
      //   allCheck.classList.remove('checked')
      // }
    })
  }
})()

// delete
;(function () {
  var trash = document.querySelectorAll('.goods .item .delete')
  var mask = document.querySelector('.mask')
  var cancel = document.querySelector('.cancel')
  var confirm = document.querySelector('.confirm')
  var goodItems = document.querySelectorAll('.goods .item')
  var index
  for (var i = 0; i < trash.length; i++) {
    trash[i].index = i
    trash[i].addEventListener('click', function () {
      mask.style.display = 'block'
      index = this.index
    })
  }

  // 取消按钮
  cancel.addEventListener('click', function () {
    mask.style.display = 'none'
  })

  // 确认按钮
  confirm.addEventListener('click', function () {
    goodItems[index].parentNode.removeChild(goodItems[index])
    mask.style.display = 'none'
  })
})()
