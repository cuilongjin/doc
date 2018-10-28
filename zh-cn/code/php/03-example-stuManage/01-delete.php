<?php
	// 删除data.json中对应的数据

	echo '<pre>';
	print_r($_GET);
	echo '</pre>';

	// 1. 读取data.json 
	$str = file_get_contents("data.json");
	// 2. 转成数组
	$arr = json_decode($str, true);
	// 3. 删除对应的那条数据
	// array_splice(数组, 开始的下标, 截取长度) 会改变原来的数组
	array_splice($arr, $_GET["index"], 1);

	//  echo '<pre>';
	//  print_r($arr);
	//  echo '</pre>';

	// 4. 删除之后的数据转成json字符串
	$jsonstr = json_encode($arr);
	// 5. 在存储到data.json中
	file_put_contents("data.json", $jsonstr);
	// 6. 跳到list.php
	header("location: 01-list.php");
?>