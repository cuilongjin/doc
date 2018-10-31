<?php
    header("content-Type:text/html;charset=utf-8");
	// PHP 操作数据库 步骤
	// 1. 链接数据库
    // mysqli_connect(ip地址, 用户名, 密码, 数据库名称, 端口号)
    $link = @ mysqli_connect("127.0.0.1", "root", "root", "study", 3306);

    // 如果链接成功,返回一个链接对象, 如果不成功,返回一个false
    // echo "<pre>";
    // print_r($link);
    // echo "</pre>";
    if(!$link) {
        echo "链接失败";
        // return false;
        // die("链接失败1");
    }
    // var_dump($link);

	// 2. 准备 sql 语句
	$name = "gblw";
	$age = 31;
	$sql = "insert into stu (name, age) values ('$name', $age)";
	// 注意:准备sql语句的时候,最好用双引号, $name 要加引号
	


	// 3. 执行 sql 语句
	// mysqli_query(链接对象, sql语句)
	// 如果执行的非查询语句,成功返回true, 失败返回false

    // $res1 = mysqli_query($link, "insert into stu (name, age, sex) values ('zs', 22, 'm')");
	// // var_dump($res);
	// if($res1) {
	// 	echo "成功";
	// } else {
	// 	echo "失败";
	// 	// mysqli_error 可以查看错误消息
	// 	echo mysqli_error($link);
	// }


	// 如果是查询语句, 成功返回一个结果集, 失败返回false
	// 注意: 如果sql语句写错了,才会出现查询失败. 如果要查找的那条数据不存在,返回的依然是结果集,只是结果集中没有任何数据

	$res2 = mysqli_query($link, "select * from stu where id = 2");
	// $res 是返回的结果集,是一个对象的数据类型. 表面上看没有我们要的数据,如果我们想要数据,需要调用mysqli_fetch_assoc(结果集)去获取
    // 注意: mysqli_fetch_assoc(结果集)执行一次,只会从结果集中拿一条数据出来

	echo "<pre>";
	print_r($res2);
	echo "</pre>";
	
	$result = mysqli_fetch_assoc($res2);
	echo "<pre>";
	print_r($result);
	echo "</pre>";

    // 5. 关闭数据库
    mysqli_close($link);

?>