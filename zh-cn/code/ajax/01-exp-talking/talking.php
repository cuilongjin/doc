<?php
header("content-Type: text/html; charset=utf-8");
	$results = array(
		"吃药了没?",
		"不约。。",
		"爱过",
		"你今天长的真帅!",
		"这你也信",
		"曾经有一份真挚的爱情摆在我面前，我却没有珍惜",
		"情不知所以，一往而深",
		"陪伴是最长情的告白",
		"死鬼, 一般去~",
		"流氓!"
	);

	// 随机取出数据
	//从数组中随机获取数据
	// array_rand(被操作的数据, 数据长度) 返回一个随机的下标
	$index = array_rand($results, 1);

	// 延迟一秒执行
	sleep(1);
	echo $results[$index];
?>