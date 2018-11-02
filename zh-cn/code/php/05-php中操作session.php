<?php
 //php中操作session ,操作之前必须开启session
 session_start();
//  注意:一旦开启session,那么服务器会自动做一些事情

//  $_SESSION['username'] = 'zs';
// $_SESSION['age'] = 18;

//删除指定的一条
// unset($_SESSION['username']);

//清空session
// $_SESSION = [];

// echo session_id();
// 把文件都删除掉
session_destroy();

//  echo $_SESSION['username'];
?>