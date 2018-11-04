<?php
	// 获取上传上来的数据
	$uname = $_GET["uname"];

	// 和后台数据对比
	$arr = ["zs", "ls"];
	// 判断$uname 在不在数组里
	// in_array(查找的内容, 数组) 如果查找到返回 true ，查找不到返回 false
	$result = in_array($uname, $arr);
	if($result) {
		echo "yes";
	} else {
		echo "no";
	}
?>