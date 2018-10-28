<?php
header("content-Type: text/html;charset=utf-8");
	// print_r($_POST); // Array ( [username] =>  [password] =>  )
	// 获取到用户名和密码
	$username = $_POST["username"];
	$password = $_POST["password"];

	// 判断是否正确
	if($username == "root" && $password == "1234") {

		//正确,跳转到另外一个首页
    	// header('location: 跳转页面的路径')
		header("location: home.html");
	} else {

		// 提示一下,用户名或者密码错误
		echo "用户名或密码错误";
	}
	// $username = 
?>