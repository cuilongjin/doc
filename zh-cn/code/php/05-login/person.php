<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		include_once 'fn.php';
		is_login();
		// 获取session中的值
		$uname = $_SESSION["uname"];
	?>
	<h1>个人主页</h1>
	<p>尊敬的<?php echo $uname?>欢迎回来</p>
	<a href="list.php">点击进入list页面</a>
</body>
</html>