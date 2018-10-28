<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="./css/list.css">
	<title>Document</title>
</head>

<body>
	<h4>用户信息列表</h4>
	<a href="01-add.html">添加数据</a>
	<table>
		<tr>
			<th>用户名</th>
			<th>昵称</th>
			<th>性别</th>
			<th>年龄</th>
			<th>电话</th>
			<th>班级</th>
			<th>头像</th>
			<th>操作</th>
		</tr>

		<?php

			// 1. 读取文件
			$jsonstr = file_get_contents("data.json");

			// 把 json 格式的字符串转换成数组
			$arr = json_decode($jsonstr, true);
			// echo "<pre>";
			// print_r($arr);
			// echo "</pre>";
		?>

		<?php foreach($arr as $k => $v) { ?>
			<tr>
				<td><?php echo $v["username"]?></td>
				<td><?php echo $v["nickname"]?></td>
				<td><?php echo $v["sex"] == "m" ? "男" : "女"?></td>
				<td><?php echo $v["age"]?></td>
				<td><?php echo $v["tel"]?></td>
				<td><?php echo $v["class"]?></td>
				<td><img src="<?php echo $v["photo"]?>"></td>
				<td>
					<!-- 点击a标签,就相当于在浏览器的地址栏中输入了一个新的url地址 -->
					<!-- 在浏览器地址栏中发送出去的所有请求,都是get请求 -->
					<a href="01-delete.php?index=<?php echo $k?>">删除</a>
				</td>
			</tr>
		<?php }?>
	</table>
</body>

</html>