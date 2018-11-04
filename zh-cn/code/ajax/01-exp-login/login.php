<?php
	// 获取数据
	$uname = $_POST["uname"];
	$psw = $_POST["psw"];

	if($uname === "zs" && $psw === "1234") {
		echo "yes";
	} else {
		echo "no";
	}

?>