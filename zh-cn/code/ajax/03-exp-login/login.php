<?php
// header('content-type:text/json;charset=utf-8');
	if($_GET['username'] === 'admin' && $_GET['password'] == 1234){
		echo '{"code": "ok","name": "渣渣辉", "nickname": "小渣渣", "desc": "是兄弟来砍我"}';
	}else{
		echo '{"code": "no", "message":"你写错了亲"}';
	}

?>