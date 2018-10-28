<?php
	//需求: 接收表单数据,存储到 data.json中

	// 1. 接收数据
	// 1.1 接收基本数据
	$stuArr = $_POST;
	// echo '<pre>';
	// print_r($stuArr);
	// echo '</pre>';
	$stuArr['photo'] = '';
	// 1.2 接收文件数据
	$file = $_FILES['photo'];

	if($file['error']==0){

		// 获取后缀名
		$sfx = strrchr($file['name'], '.');
		// 生成新的文件名
		$filename = time().rand(1000,9999).$sfx;
		// 生成新的路径
		$path = "./upload/$filename";
		// 转存
		move_uploaded_file($file['tmp_name'], $path);
		// 给$stuArr['photo']赋值
		$stuArr['photo']  = $path;

	}

	// 2. 存储数据
	// 如果直接把数据写到文件中,要么会覆盖原来的内容,要么写的格式不对
	// 在写入数据之前,先把原来的拿出来,转成数组,往原来的里面添加,之后,再转成字符串,在存储
	// 2.1 先获取data.json中的数据
	$str = file_get_contents('data.json');
	echo $str;
	// 2.2 转成数组
	$arr = json_decode($str, true);
	echo '<pre>';
	print_r($arr);
	echo '</pre>';
	// 2.3 往数组中添加
	// 在js中添加数据push, 在php中没有push $arr[] = 值; 类似于js中的push
	$arr[] = $stuArr;

	// echo '<pre>';
	// print_r($arr);
	// echo '</pre>';

	// 2.4 转成json字符串
	$jsonstr = json_encode($arr);
	// 2.5 写入data.json中
	file_put_contents('data.json', $jsonstr);

	// $jsonstr = json_encode($stuArr);
	// file_put_contents('data.json', $jsonstr, FILE_APPEND);


	// 3. 存储完毕之后,跳转到list.php页面
	header('location: 01-list.php');



?>