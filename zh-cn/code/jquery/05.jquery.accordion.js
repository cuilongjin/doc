$.fn.accordion = function(options) {
    options = options || {}; // 给 options 设置默认值{}

    var maxW = options.maxW || 800; // 当前li展示的最大宽度，如果没有传递，去默认值800

    // this ==>  $("#box");
    var $lis = this.find("li");  // children() 找子元素， find() 找后代的

    var minW = (this.width() - maxW) / ($lis.length - 1);  // 其他的li 展示的宽度

    var averageW = this.width() / $lis.length;  // 每个li 平均的宽度

    var imgArr = options.imgArr;
    // console.log(imgArr);

    // 遍历
    /*for (var i = 0; i < $lis.length; i++) {
        $lis.eq(i).css("backgroundImage", "url(./images/" + (i + 1) + ".jpg)");
    }*/

    $lis.each(function (index, ele) {
        $(ele).css("backgroundImage", "url("+ imgArr[index] +")");
    })


    // 2.
    $lis.mouseenter(function() {
        // 3. 
        // 在每次开动画之前，先调用stop()， 停止当前正在执行的动画，让其执行这一次动画
        $(this).stop().animate({ width: maxW }).siblings().stop().animate({ width: minW });
    });

    this.mouseleave(function() {
        $lis.stop().animate({ width: averageW });
    })

}
