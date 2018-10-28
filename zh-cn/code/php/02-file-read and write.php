<?php
    // file_get_contents('本地文件的路径'); //获取本地文件的内容
    // file_put_contents('本地文件的路径', 写入的内容) //往本地文件中写入内容,会覆盖原来的内容

    // echo file_get_contents('02-test.txt');

    // file_put_contents('02-test.txt', '我是通通过php写入的内容',FILE_APPEND);

    // 实际工作中,经常用来存储数据的是数组.如果把一个数组存储到本地文件中,会是什么样子
    // 使用file_put_contents 存储数组的时候,会丢失数据
    $arr = ['zs', 'ls', 'ww'];
    $arr1 = ['name'=>'zs', 'age'=>18];
    echo '<pre>';
    print_r($arr1);
    echo '</pre>';
    // file_put_contents("02-test.txt", $arr); // zslsww
    // file_put_contents("02-test.txt", $arr1); // zs18


    // 实际工作中把一个数组,转成一个json格式的字符串 
    // json_encode(数组) 返回一个json格式的字符串

    $str = json_encode($arr1);
    file_put_contents('02-test.txt', $str);

    //存储到本地文件中的数据,在实际工作中肯定要拿出来进行操作
    $result= file_get_contents('02-test.txt');
    //获取到的是一个json格式的字符串,操作字符串获取想要的数据,比较麻烦
    // 所以我们一般会把数据拿到了之后,再通过php中提供的json_decode()这个方法
    // 把json格式的字符串转成数组

    json_decode('json格式的字符串', true);
    //不传true, 有可能转完之后是个对象, 传了true,一定是数组
    $arr2 = json_decode($result,true); //返回一个数组

    echo '<pre>';
    print_r($arr2);
    echo '</pre>';

?>