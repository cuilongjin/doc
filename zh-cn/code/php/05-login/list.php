<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		include_once "fn.php";
		is_login();
		// session_start();
		$uname = $_SESSION["uname"];
	?>
	<h1>个人list页面</h1>
	<p>您好<?php echo $uname?></p>
	<a href="logout.php">退出</a>
</body>
</html>