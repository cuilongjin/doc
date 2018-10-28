<?php

	echo '<pre>';
	print_r($_FILES);
	echo '</pre>';
	// sleep(秒) 让php代码暂停10s
	// sleep(10);

	// 在php中真正把文件存储起来的方法
	// 转存文件的完整步骤
	
	// 获取文件
	$file = $_FILES['photo'];

	// 1. 先判断文件是否上传成功 依据: error == 0
	if($file["error"] == 0) {
		
		// 2. 如果成功， 获取文件后缀名
		$sfx = strrchr($file["name"], ".");

		// 3. 随机生成一个文件名：当前的时间戳拼接上一个随机数
		$filename = time() . rand(1000, 9999) . $sfx;

		// 4. 拼接成新的路径
		$path = "./upload/$filename";

		// 5. 转存
		move_uploaded_file($file["tmp_name"], $path);
	}

?>