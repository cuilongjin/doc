<?php
	// PHP 操作 cookie
		// 设置cookie
		// setcookie("键", "值", 有效期); // 默认有效期为一个会话周期
		setcookie("age", "18", time()+1000); // 第三个参数比当前时间晚,就是按照有效期存储cookie
		// setcookie("age", "18", time()-1000); // 第三个参数比当前时间早,就是删除cookie

		//获取
	    echo '<pre>';
	    print_r($_COOKIE);
	    echo '</pre>'


?>
