<?php
// header("content-Type:text/html;charset=utf-8");
    header("content-Type: text/html; charset=utf-8");
    // 数学: 
    // rand(min, max) 返回min~max的随机整数,包含min和max
    echo rand(1, 4);
    echo "<br>";


    //日期
    $time = time();// 返回当前事件戳 (秒数)
    echo $time;
    echo '<br>';
    echo date('Y年m月d日 H时i分s秒', $time);
    echo '<br>';
    echo date('Y/m/d H:i:s', $time);

?>