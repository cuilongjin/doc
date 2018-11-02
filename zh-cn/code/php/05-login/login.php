<?php
header("content-Type:text/html;charset=utf-8");
// header("content-Type:text/html;charset=utf-8");
// 接收数据
$uname = $_POST["username"];
$psw = $_POST["password"];

// 验证用户名和密码
if($uname === "admin" && $psw = "1234") {

	// 用户名密码正确，开启 session ，把用户名存储到 session 中，页面跳转
	session_start();
	$_SESSION['uname'] = $uname;
	header("location: person.php");
} else {

	// 用户名密码不正确，提示用户，并返回login.html
	echo "用户名或密码不正确";
	header("refresh:3;url=login.html"); // 延时3s跳转
}
?>