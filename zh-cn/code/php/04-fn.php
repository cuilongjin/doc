<?php
	// 定义常量
	define('IP', '127.0.0.1');
	define('uname', 'root');
	define('psw', 'root');
	define('DB', 'study');
	define('PORT', 3306);

	// 封装两个函数
	// 1. 查询语句 如果成功返回一个数组，数组里存储着数据，如果失败，返回 false
	// 2. 非查询语句 如果成果，返回 true ， 如果失败， 返回 false

	// 查询函数
	function mysql_select($sql) {
		// 1. 连接数据库
		// 如果数据库连接失败，@ 可以抑制错误信息打印到页面上，
		$link = @ mysqli_connect(IP, UNAME, PSW, DB, PORT);

		// 判断是否连接成功
		if(!$link) {
			return false;
		}
		var_dump($link);

		// 执行 sql 语句
		$res = mysqli_query($link, $sql);

		// 3. 如果执行成功，从结果集中获取数据，存储到数组中，返回出来；如果失败，返回 false 
		if($res) {

			// 执行成功
			// 创建数组
			// mysqli_fetch_assoc($res);
			$arr = [];
			for($i = 0; $i < mysqli_num_rows($res); $i++) {
				// echo $i;
				$arr[] = mysqli_fetch_assoc($res);
			}

			// 4. 关闭数据库
			mysqli_clouse($link);
			return $arr;
		} else {
			// 执行失败
			// 4. 关闭数据库
			mysqli_close($link);
			return false;
		}
	}

	// 非查询函数
	// 如果成功返回 true ， 失败返回 false
	function mysql_exec($sql) {

		// 1. 链接数据库
		$link = @ mysqli_connect(IP, UNAME, PSW, DB, PORT);
		if(!$link) {
			echo "链接失败";
			return false;
		}

		// 2. 执行 sql 语句
		$res = mysqli_query($link, $sql);

		// 3. 根据结果判断
		if($res) {

			// 4. 关闭数据库
			mysqli_close($link);
			return ture;
		} else {

			// mysqli_error(链接对象) 获取执行 sql 语句的时候，报的错误信息
			echo mysqli_error($link);

			// 4. 关闭数据库
			mysqli_close($link);
			return false;
		}
	}

?>