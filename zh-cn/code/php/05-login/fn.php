<?php
// 封装登陆拦截函数
function is_login(){

	// 判断该用户有没有 sessionId
	if(isset($_COOKIE["PHPSESSID"])) {

		// 有值，尝试获取用户信息，从 session中读取数据
		session_start();
		if(isset($_SESSION["uname"])) {
			// 有该用户名，说明服务器认识
		} else {

			// 没有查到用户名，了N街到登录页
			header("location: login.html");
		}
	} else {

		// 没有 sessionid ，跳转到登录页
		header("location: ligin.html");
	}
}


?>