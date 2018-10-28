<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="./style.css">
</head>
<body>
	<div class="header">
		网上水果超市
	</div>
	<div class="container">
		<p>
			<a href="#">水果</a>
			<a href="#">干果</a>
			<a href="#">蔬菜</a>
		</p>
		<ul>
			<?php 
				//引入fruit.php中的数据
				// include 引入文件
				// include '引入的文件的路径'
				include 'fruit.php';
			?>

			<?php  foreach($arr as $v){ ?>
			<li>
				<img src="<?php echo $v['path']?>" alt="">
				<a href="#"><?php echo $v['name']?></a>
			</li>
			<?php }?>
		</ul>
  	</div>
  	<div class="footer"></div>
</body>
</html>