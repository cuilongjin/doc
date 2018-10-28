<?php

  //前端请求的方式不同,php部分,获取数据的方式也不同
  // 如果前端请求的方式是get, 那么php部分,获取数据使用$_GET
  // 如果前端请求的方式是post, 那么php部分,获取数据使用$_POST

  // $_GET 和 $_POST 这两个叫做超全局变量,在任何位置上都可以使用. 都是数组的结构

  echo '<pre>';
  print_r($_GET);
  echo '</pre>';

  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

?>