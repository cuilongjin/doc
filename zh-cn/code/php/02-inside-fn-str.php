<?php

    $str = 'name@qq.cn.com';
    // 字符串替换的方法
    // str_replace('被替换的字符', '替换的字符', 被操作的字符串)

    echo str_replace('n','!',$str);
    echo '<br>';

    //字符串切割成数组的方法
    // explode('切割符', 被操作的字符串)  返回一个数组
    $arr = explode('@', $str);
    print_r($arr);
    echo '<br>';

    //把数组拼接成字符串的方法
    // implode('链接符', 被操作的数组) 返回一个拼接好的字符串
    echo implode('?', $arr);
    echo '<br>';


    //截取的方法
    // substr(被操作的字符串, 开始的下标, 截取的长度);
    echo substr($str, 4, 2 );
    echo '<br>';
	//如果要字符串中包含中文,注意:一个中文占三个字节
    echo substr($str, 4, 4 );
    echo '<br>';

	// strrchr(被操作的字符串, '参考字符')
	// strchr(被操作的字符串, '参考字符')

	echo strrchr($str, '.'); //从右往左查找对应的参考字符,找到了之后,返回参考字符后面的所有内容,包含参考字符
	echo '<br>';
	echo strchr($str, '.'); //从左往右查找对应的参考字符,找到了之后,返回参考字符后面的所有内容,包含参考字符





?>