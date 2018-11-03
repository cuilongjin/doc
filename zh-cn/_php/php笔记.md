# PHP

## 服务器



### 什么是服务器？

> 通过安装服务器软件，**提供服务** 的计算机

   服务器可以从硬件、软件(系统软件、应用软件)几个角度描述。

   按硬件描述： 服务器就是一台超级计算机(配置很高)。
   按操作系统划分： 在硬件上安装了什么操作系统，就可以称为该系统的服务器
​	                   例如:  linux服务器、windows服务器、unix服务器等。
   按软件划分： 在操作系统中安装了什么软件，就可以称作该软件的服务器 iis tomcat
​	                   例如: **web服务器**、数据库服务器、邮件服务器等。



### 什么是Web服务器

Web服务器就是安装了Web服务软件，web服务器的作用是能够提供网站服务的服务器。淘宝、京东、新浪等等

 常见的Web软件：
 **Apache**、Nginx、IIS、Tomcat、Node等。
Apache服务器、Nginx服务器、IIS服务器、Tomcat服务器、Node服务器

Apache是世界使用排名第一的Web服务器软件。我们将编写好的html、css、js等文件存入apache，就能够通过网络来访问这些文件了。

PS: web服务器又叫做http/httpd服务器



## phpStudy 介绍

> phpStudy是一个PHP调试环境的程序集成包
>
> 该程序包集成最新的 Apache+PHP+MySQL
>
> 安装phpStudy，一定不能有中文，否则肯定启动不起来

**注意: **将要访问的文件(html,php,img等)，放到安装路径下的 `www` 目录下，通过浏览器就可以访问到了



### phpStudy的错误解决

如果phpStudy启动发生错误，参数下列几点。

- 一是防火墙拦截，


- 二是80端口已经被别的程序占用，如IIS等；


- 三是没有安装VC9运行库,php和apache都是VC9编译。



## 网络基础(重点)



浏览器中地址栏，要输入的内容叫做 `url` 统一资源定位符

`协议://域名:端口号/路径?查询字符串#哈希值`

协议: 规定了客户端和服务器交互方式  http https ftp..

域名: 找到对应的电脑

端口号:找电脑上对应的应用程序，web服务器一般默认端口号都是80



### ip地址

所谓IP地址就是给每个连接在互联网上的主机(计算机)分配的一个地址。(就像每个人的身份证号码一样)

通过ip就可以找到具体的某一台计算机。

例 `192.168.1.110`

弊端：没有规律，不方便记忆和推广

查看本机IP地址  `ipconfig`、`ifconfig`（linux）

```javascript
ping 192.168.1.110  // 查看和某个同学的电脑是否连通
```

**127.0.0.1 **作为本地测试的IP地址。(又叫本地回环地址)

192.168 开头为局域网的地址。



### 域名

由于IP地址基于数字，不方便记忆，于是便用域名来代替IP地址，域名是一个IP地址的“好记的名字”

查看域名对应的IP地址 `ping`

```javascript
ping jd.com  // 可以获取到京东的ip
```

**特殊的域名**

`localhost`，意思为本地主机。这是一个保留域名，主要用于本地测试，对应IP地址为`127.0.0.1`。



### DNS服务器

DNS（Domain Name System）因特网上作为域名和IP地址相互映射的一个分布式数据库， 能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。

简单的说就是用于记录IP地址和域名之间的对应关系。

查找优先级 本机hosts文件、DNS服务器



### 端口号

>端口号对应的是计算机的应用程序

概念: 端口号是计算机与外界通讯交流的出入口，每个端口对应不同的服务。

 apache 的默认端口号为80，所以可以省略不写  (tips:很多web服务器默认端口都是80 Nginx IIS)



### 本地hosts

> Hosts是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会**首先自动从Hosts文件中寻找对应的IP地址**，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。

hosts文件的地址：`C:\Windows\System32\drivers\etc`



## PHP 基础(重点)



###PHP 简介

 PHP（外文名:PHP: Hypertext Preprocessor，中文名：“超文本预处理器”）是一种通用开源脚本语言。主要适用于 **Web领域的开发** ，能够完成 **动态网页** 的制作。



###PHP 特点

- PHP 是目前最流行的网站开发语言（B/S结构）之一。
- PHP 是一种在服务器端执行的嵌入 HTML 文档的脚本语言。
- 支持几乎所有流行的 **数据库** 以及操作系统。
- 源码开放、免费（free)
- php 是世界上最好的语言




###动态网站与静态网站(了解)

- 静态网站：使用浏览器端语言进行编程，网站由静态代码（HTML,CSS,JS）组成。

- 动态网站 ：网页通过服务器的程序(php等)动态生成。用户可以和服务器进行交互（可以根据用户输入的不同信息，返回不同的运行结果）

**总结**

 	动态网站的 **动** 指的是网站 **数据的动** 而不是  **视觉上的动**



###软件架构(了解)

> 软件架构可以分为BS架构与CS架构



####C/S架构

Client/Server架构，即客户端/服务器架构。需要安装对应的客户端软件，才能获取服务器的服务。

常见的CS架构：QQ、LOL、微信等

特点：

- 需要安装才能使用

- 性能高效，使用更加稳定和流畅

  ​


####B/S架构

Broswer/Server架构，即浏览器/服务器架构。随着Internet的兴起，无需安装专门客户端软件，通过浏览器去请求服务器；

- 不需要安装，只需要浏览器即可。
- 相比CS架构，性能相对较差，没有那么流畅和稳定。



## php 基本语法结构



```php
// 避免使用中文目录和中文文件名 
// 文件以.php后缀结尾，所有程序包含在<?php 这里是代码 ?>
// php页面无法直接打开需要运行在服务器环境当中
// 末尾必须加分号，不然就报错了（最后一行可以不加分号）

<?php
    echo "hello world";
?>
```

输出中文乱码问题：如果使用 echo 输出中文，可能会乱码

```php
<?php
    // 解决中文乱码的问题
    header("content-Type:text/html;charset=utf-8"); // 返回HTML文档文本并设置编码集
    echo "hello world";
    echo "<br/>";
    echo "大家好，我是一名摄影工作者";
?>
```



##PHP运行原理



###HTML运行原理

![](images/HTML运行原理.png)

1) 在浏览器的URL地址栏中输入 www.baidu.com/index.html 地址，点回车。请求就发送给百度服务器。
2) 百度服务器找到index.html文件，并将文件的内容返回给浏览器
3) 浏览器接收到index.html中的内容，渲染到页面上。

同理: localhost/a.html ,  则会返回 本机web服务器根目录下 a.html文件的内容。浏览器拿到内容后进行渲染。



###PHP运行原理

 apache 不认识 php
 浏览器也不认识 php

 ![](images/PHP运行原理.png)

 1) 在浏览器地址栏中输入 localhost/index.php ,点回车之后。将请求发送给apache服务器。
 2) 服务器找到 index.php文件之后，转发给php解释器
 3) php解释器将index.php文件中的php代码全部转为字符串，再返回给apache
 4) apache将处理好的字符串返回给浏览器，浏览器渲染后就可以看到页面



## 变量

> php 是一门弱类型语法，变量的类型可以随意改变。
> 变量其实就是存储数据的容器

**变量的命名规则**

* 不需要关键字进行声明，变量在第一次赋值的时候被创建
* 必须以 `$` 符号开始
* `$` 后面的命名规则与js的变量命名规则一致。



### 变量操作

**声明变量**

声明变量的时候也一定要同时赋值,否则变量无法声明成功

```php
// 变量在声明的时候一定要同时赋值,否则变量无法声明成功
$name = "呵呵";
echo $name;
```

**删除变量 unset()**

```php 
unset($name); // 销毁指定的变量
```

**判断变量是否设置值 isset()**

```php
isset($name);
echo isset($name); // 用 echo 打印，如果为 true 会打印出 1 ， 如果为 false 打印空
var_dump(isset($name)); // 会打印出 bool(true)/bool(false)
```

变量未设置或者设置为null，返回false（认为变量没有设置），其余情况全部为true。一般用来判断变量是否设置，因为变量未设置，无法直接使用。(变量先赋值，在使用！） 

**判断变量是否为空 empty()**

```php 
var_dump(empty($name)); // 为空打印出 bool(true)，不为空则打印 bool(false)
```

PHP中认为变量的值为：`""`、`0`、`"0"`、`null`、`false`、`[]` 时，变量虽然赋值了，但是无实际的意义。为空。



## 数据类型

>php数据类型:  8种数据类型
>
>基本数据类型: 布尔, 字符串, 整数, 浮点数
>
>复合数据类型:数组, 对象
>
>特殊的类型:resource(资源) null



### 简单数据类型



#### 输出语句 

```php
//1. echo 输出简单数据类型
//2. print_r 输出数据结构，一般用于输出复杂类型。
print_r($arr); // print_r 是一个函数，不要忘记小括号
//3. var_dump 输出完整的数据结构，包括类型，一般用于精准调试
var_dump($arr);
```



#### 字符串

```php
$str = "php是世界上是最好的语言";
echo $str;
```

**字符串连接符** 

php中，`+` 号只有算数的功能，并不能拼串，拼串使用 `.`

```php
$name = "大象";
echo "大家好，我是" . $name . "，今年18岁";
```

**php 中的单引号与双引号**

```php
//1. 字符串的定义可以使用单引号，也可以使用双引号
//2. 双引号可以解析变量
//3. 单引号的性能会高于双引号（了解）

$name = "大象";
$desc = '很帅';
$str = '$name 很帅';
echo $str; // $name 很帅
$str = "$name 很帅";
echo $str; // 大象 很帅
```



#### 整数 

```php
$num = 100;
echo $num;
```



#### 浮点型 

```php
$float = 11.11;
echo $float;
```



#### 布尔类型 

```php
$flag = true;
// 当布尔类型值为true时，输出1
echo $flag;
$flag = false;
// 当布尔类型为false时，输出空字符串
echo $flag;
```



### 数组

> 在 php 中，数组分为两种，**索引数组** 和 **关联数组**
>
> 计算数组长度的方法：count(数组名)；

**索引数组（类似与JS中的数组）**

```php
$arr = array("张飞","赵云","马超");
echo $arr; // Array // echo 只能打印基本数据类型
// 使用 print_r() 打印
print_r($arr); // Array ([0] => 张飞 [1] => 赵云 [2] => 马超) 
echo $arr[0]; // 张飞
```

**关联数组（类似与JS中的对象）**

```php
// 属性名必须用引号引起来
$arr = array("name"=>"zhangsan", "age"=>18);
print_r($arr); // Array ( [name] => zhangsan [age] => 18 )
echo $arr["name"];
```



**二维数组与多维数组**

数组中的每个元素又是一个数组
二维数组的存取元素，需要两次访问，依次确定行和列 `$arr[x][y]`;

> 多维数组数组里面嵌套了两层以上的数组




### 对象(了解)

> 在php以及其他高级语言中，都有类的概念，表示一类对象，跟js中构造函数类似。

```php
//定义一个类（类似js的构造函数）
class Person {
  public $name = "小明";
  private $sex = "男";
}

$zs = new Person;
print_r($zs);
//打印对象的结构信息 Person Object ([name] => 小明[sex:Person:private] => 男 )

echo $zs->name; // 对象中取值用 ->
echo $zs->sex; // 私有属性，无法获取
```



## 流程控制



### 分支结构(if/switch)

基本上来说，所有语言的if..else语法都是一样

```php
$age = 17;
if ($age >= 18) {
  echo "终于可以抽烟喝酒烫头了";
} else {
  echo "哎......";
}
//===================
switch(变量){
	case 值1:
		程序块1；
		break;
	case 值2:
		程序块2；
		break;
	...
	default:
		程序块
}
```



### 循环结构(while / for / do...while)

```php	
while(判断表达式){
	程序块;
}

for(赋值表达式; 判断表达式; 步进表达式){
	程序块;
}

do{
	程序块
} while(判断表达式)
```

**遍历索引数组** 

```php
$arr = array("张三", "李四", "王五", "赵六", "田七", "王八");
// 获取数组的长度： count($arr)
for($i = 0; $i < count($arr); $i++) {
  echo $arr[$i];
  echo "<br>";
}
```



### foreach 语句结构

> 用来遍历数组(关联数组和索引数组均可)。

```php
foreach($arr as $key => $value){
	程序体
}
foreach($arr as $value){
	程序体
}
```

 `$arr` :  要遍历的数组

 `$key`:  键，可以是任意变量名

 `$value`:  值，可以是任意变量名

```php
//遍历关联数组
$arr = array(
  "name"=>"zs",
  "age"=>18,
  "sex"=>20
);
foreach($arr as $k => $v) {
  echo $k . "=" . $v . "<br>";
}
```



## 函数

> 注意，在php中函数不能重复声明

php 中函数的语法与js中函数的语法基本一样，不同点在于

1. 函数名大小写不敏感
2. 函数的形参可以设置默认值

```php
<?php
    header("content-Type:text/html;charset=utf-8");
    function sayHello ($name="周杰伦") {
        echo "大家好，我是$name";
        echo "<br>";
        [return 返回值;]
    }
    sayHello(); // 不传参数，会使用默认值
    sayHello("大象"); // 传参数，默认值不生效
?>
```

1. 在 php 中函数不能重复声明
2. 函数体内的变量只在函数体内有效
3. 函数体外的变量只在函数体外有效

```php
<?php  
    $age = 18
    function fn(){
    	$name = '大象';
    	echo $name;  // 有效
    	echo $age;  // 无效
	} 
	fn();
	echo $name;  // 无效
    echo $age; // 有效
?>
```



## 常量

保存不会发生改变的数据(如：3.1415， 路径等)时，最好使用常量。

 常量的使用方法：

```php
define(常量名, 常量值, [是否区分大小写]);
// 默认 false 区分大小写， true 不区分大小写
define("PI", 3.1415, true);
echo PI;
echo pi;
```

**注意:**  一般在实际工作中，常量都用大写，**常量不能被重新赋值**



## PHP内置函数

### 数学函数

- max(),min()   分别返回一组数的最大值及最小值；
- abs() 返回绝对值。
- floor() 向下取整。
- ceil()  向上取整。
- round() 四舍五入。
- rand()  返回随机整数，可以取到两端的值。



### 日期函数

- `time()`  返回当前的时间戳 (1970到现在的时间的秒数)

- `date(format,time)`  格式化一个本地时间或日期

  格式：Y(年) m(月)  d(日)   H(时)  i(分)  s秒

```php
$time = time(); // 获取时间戳
echo date('Y-m-d H:i:s',$time); // 格式化时间戳
// Y, m, d, H, i, s 分别代表 年 月 日 时 分 秒
```

默认时区会不太正确,  我们在东八区, 比0时区会多八小时

```php
路径: D:\phpStudy\php\php-5.4.45
在php.ini里加上找到date.timezone项，设置date.timezone = "PRC"，重启环境就ok了。
PRC: 中华人民共和国
```



### 字符串函数

- `str_replace(查找的值，替换的值，执行替换操作的字符)`    字符串替换（会把符合的值全部替换）
- `trim(字符串);`  去除首尾空白字符
- `explode(分割符，执行分割的字符串);`  使用一个字符分割一个字符串，返回一个数组(类似split)
- `implode(连接符，执行连接的数组);`   将数组根据连接符拼接成字符串(类似join)
- `substr(字符串，起始索引，截取长度);`  截取字符串，注意中文占3个字节长度
- `strchr(字符串，标识字符);`   从左向右找标识字符，返回该字符后全部字符(包括该字符)
- `strrchr(字符串，标识字符);`   从右向左找标识字符，返回该字符后全部字符(包括该字符) **主要用于获取后缀名**



### 补充

 `in_array(查找的内容, 数组)`   如果查找到返回 true ，查找不到返回 false

```php
result = in_array($uname, $arr);
```



## 页面动态渲染

- PHP本身支持与HTML混编

- 混编的文件后缀必须为 .php， Apache 才会调用 PHP 解析

- PHP与HTML混编时，服务器中的 PHP 引擎 只会执行php标签内部的PHP代码，非PHP的代码(PHP标签外部的内容)直接忽略，最后会将PHP的执行结果和非PHP代码 一起返回给浏览器,由浏览器进行解析

- 一个php页面当中,可以写多个php语法结构,但是php语法结构 **不能嵌套**



  ```php
  <?php 
      header('content-type:text/html;charset=utf-8');    
      echo 2+3;
      // php的引擎 只会执行php代码块中代码，代码块外面的代码会被忽略最后 服务器会将php执行的结果和代码块外面的内容一起返回给浏览器，由浏览器进行解析
  ?>
  // 在php语法结构外面， 可以写 html ，会直接在浏览器中渲染
  <a href="http://www.baidu.com">百度一下</a>
  ```



## include 文件引入

**介绍**：不同的页面中有相同的代码部分，可以将其分离为单个文件。需要调用时，**include 引入对应的文件即可调用**。提高代码的复用率。类似于 js 中 script 标签导入, 可以用于函数复用

**语法**

```javascript
// 可以是html、php或其他类型的页面
include | include_once   "文件的路径"
```

**include 与 include_once 区别**

- include  可以重复引入文件
- include_once  只引入一次，防止多次引入文件
- 如果文件中有函数，include 重复引入会报错，include_once 不会报错



## PHP 数据读写到文件(数据持久化)

程序运行过程中，数据存储在内存中的，程序结束, 数据会销毁

如果希望可以永久存储某些数据，可以将数据存储在硬盘上（存储在文件中） 

将数据由内存存储到硬盘的过程，称为数据持久化；

- `file_get_contents(path)`   根据路径读取文件内容, 返回一个字符串

- `file_put_contents(path,$str)`  将一个字符串写入到一个文件中。(只能存储字符串)

  ```php
  file_put_contents(string $file, string $data[, constants flag]);
  参数1: 文件路径
  参数2: 要写入文件的字符串
  参数3: 可选参数，默认不写，新内容覆盖原文件中的内容；FILE_APPEND 是向文件中追加内容
  返回值: 写入文件的字符串长度(不用记)
  ```

使用 `file_put_contents` 存储数组的时候，会丢失数据

```php
$arr = ['zs', 'ls', 'ww'];
$arr1 = ['name'=>'zs', 'age'=>18];
file_put_contents("02-test.txt", $arr); // zslsww
file_put_contents("02-test.txt", $arr1); // zs18
```

把一个数组，转成一个 json 格式的字符串

- `json_encode($data)`   将PHP数组转成JSON格式字符串。
- `json_decode($str,true)`  将 JSON 字符串, 转换为 PHP 数组。（不传true, 有可能转完之后是个对象, 传了true,一定是数组）



## 表单处理

> 表单（form）：表单用于收集用户输入信息，并将数据提交给服务器。是一种常见的与服务端数据交互的一种方式

1. `action`: 指定表单的提交地址
2. `method`: 指定表单的提交方式，get/post，默认 get
3. `input` 的数据想要提交到后台，必须指定 name 属性，后台通过 name 属性获取值
4. 想要提交表单，不能使用 `input:button` 必须使用 `input:submit`



### php 获取表单数据 

```php
// $_GET 是 PHP 系统提供的一个超全局变量，是一个数组，里面存放了表单通过 get 方式提交的数据
// $_POST 是 PHP 系统提供的一个超全局变量，是一个数组，里面存放了表单通过 post 方式提交的数据
```



**get 与 post 的区别**

- `get` 方式
  数据会拼接在 url 地址的后面 (?username=pp&password=123456)
  地址栏有长度限制，因此 get 方式提交数据大小不会超过 4k
- `post` 方式
  数据不会在 url 中显示，相比 get 方式，post 更安全
  提交的数据没有大小限制，可用于文件上传



### 文件上传

**html要求** 

- 文件上传的提交方式必须是 `post` 方式

- 需要给 `form` 指定 `enctype="multipart/form-data"`

- 指定 `name` 属性，后台才能获取到

**php 相关**

- 文件上传时，通过 `$_FILES` 才能获取到，这是一个二维数组。

  ```php
    Array
    (
        [photo] => Array
            (
                [name] => 001.jpg   // 文件名字
                [type] => image/jpeg  // 文件类型
                // 上传图片保存的位置
                [tmp_name] => C:\Users\Jepson\AppData\Local\Temp\phpF2A0.tmp   
                [error] => 0     // 上传错误码, 错误码为 0 表示没有错误
                [size] => 6000   // 文件大小, 单位字节, 大小 6kb 左右
            )
    )
  ```

  ​

- 上传文件时，文件会临时保存在服务器上，如果文件最终没有保存，那么临时文件会被删除，保证服务器安全。

- `sleep(10) ` 可以让代码延迟10秒钟才执行。

- `move_uploaded_file($path, $newPath);` 可以转存临时文件，真正把文件存储起来

```php
  // 保存图片的完整代码
  // 思路:
  // 1. 在文件上传成功的情况下, 进行图片的保存   error == 0
  // 2. 获取临时文件路径
  // 3. 随机生成新的文件名, 注意文件中后缀名是不能改变的
  // 4. 根据新的文件名, 转移临时文件

  $file = $_FILES['photo'];

  // 判断上传是否成功
  if ( $file['error'] == 0 ) { // 上传成功
    // 1. 获取临时文件路径
    $ftemp = $file['tmp_name'];

    // 2. 随机生成新的文件名, 后缀不能随便起, 要获取一下
    $name = $file['name'];
    $text = strrchr($name, '.');
    // 为了防止重复, 生成随机的文件名以当前时间秒数+随机数组成
    $newName = time().rand(10000,99990).$text;

    // 3. 进行转存
    move_uploaded_file($ftemp, "./upload/$newName");
  }
```



## 学生信息管理系统1.0

### 基本功能

- 学生添加功能
- 展示学生信息功能
- 删除学生信息

```php
// array_splice(数组, 开始的下标, 截取长度) 将匹配到的数据截取掉，会改变原来的数组
array_splice($arr, $_GET["index"], 1);

// 添加内容到数组：将 $stuArr 添加到数组 $arr 中
$arr[] = $stuArr;
```



## HTTP协议

**协议：**

> 协议，就是事先的一种约定、规则、规范、标准

 **常见协议**

- HTTP、HTTPS 超文本传输协议 
- FTP 文件传输协议
- SMTP 简单邮件传输协议

**HTTP 协议**

HTTP 协议即超文本传输协议,  是一个 [浏览器端] 和 [服务器端] 请求和响应的标准

- 常用请求方法  GET, POST
- 请求 (request)：`请求行、请求头、请求主体`。
- 响应 (response)：`状态行、响应头、响应主体`。



### 请求和请求报文

​	请求由浏览器发起，其规范格式为：请求行、请求头、请求主体。	

**get 请求的请求报文**

```javascript
// --------------------------请求行--------------------------------
// GET 请求方式
// /day02/01.php?username=pp&password=123456    请求路径+参数（注意点）
// HTTP/1.1 HTTP的版本号
GET /day03/01.php?username=pp&password=123456 HTTP/1.1

//--------------------------请求头--------------------------------
// Host:主机地址
Host: www.study.com
// HTTP1.1版本默认开启，建立过连接后，TCP连接不会断开，下次连接可以继续使用（底层，不用管）
Connection: keep-alive
// chrome浏览器自己增加的，不用管
Upgrade-Insecure-Requests: 1
// 浏览器的代理字符串（版本信息）
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
// 浏览器端可以接受的类型。
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
// 从哪个页面发出的请求
Referer: http: // www.study.com/day02/01-login.html
// 检查浏览器支持的压缩方式
Accept-Encoding: gzip, deflate, sdch
// 浏览器支持的语言，优先中文。
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

// ----------------------------请求主体-------------------------------------
// get 请求没有请求体，因为要传递的数据已经拼接到了请求主头中
```



**POST 请求的请求报文** 

```javascript
// -----------------------请求行---------------------------------------------
POST /day02/01.php HTTP/1.1

// -----------------------请求头--------------------------------------------
Host: www.study.com
Connection: keep-alive
// 传递的参数的长度
Content-Length: 29
Cache-Control: max-age=0
Origin: http: // www.study.com
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
// 内容类型：表单数据，如果是post请求，必须指定这个属性。
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
Referer: http: // www.study.com/day02/01-login.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

// ------------------------请求体------------------------------------------
username=pp&password=123456
```



**`GET` 请求与 `POST` 请求的对比** 

- GET 请求没有请求体，因为 GET 请求的参数拼接到地址栏中了
- POST 请求有请求体，就是传递的参数。



### 响应与响应报文

​	响应由服务器发出，其规范格式为：响应行(状态行)、响应头、响应主体。

```javascript
// ---------------------响应行（状态行）-------------------------------
// HTTP/1.1  HTTP版本
// 200 响应的状态
	// 200表示成功
	// 302页面重定向
	// 304表示文档未修改
	// 404表示找不到资源
	// 500表示服务端错误
HTTP/1.1 200 OK

// ----------------------响应头-----------------------------------------------
Date: Thu, 22 Jun 2017 16:51:22 GMT // 服务器的时间
Server: Apache/2.4.23 (Win32) OpenSSL/1.0.2j PHP/5.4.45  // 服务器的版本信息
X-Powered-By: PHP/5.4.45  // 后台编程语言信息
Content-Length: 18   // 服务器的响应主体长度
// 内容类型，告诉浏览器该如何解析响应结果
Content-Type: text/html;charset=utf-8

// -----------------------响应主体------------------------------------------------
用户登录成功
```



## Mysql数据库

### 数据库概念

专门用来存储、管理数据的仓库 英文：Database, DB。

### 数据库的分类

- 关系型数据库: 基于表，表与表之间可以存在关系，可以进行多表查询的存储方式，适合较为复杂的存储   

  如: MySQL, SQL Server, oracle

  表结构:  

   每一行代表一条数据 --- **记录**

   每一列都是一类数据 --- **字段**

  | **订单编号** | **商品名称** | **价格** | **数量** |
  | ------------ | ------------ | -------- | -------- |
  | 100123       | 华为mate10   | 4999     | 2        |
  | 100124       | 花裙子       | 499      | 1        |

- | 订单编号 | 用户     | 配送地址            |
  | -------- | -------- | ------------------- |
  | 100123   | 隔壁老王 | 北京市京顺路99号    |
  | 100124   | 隔壁老宋 | 北京市清华大学1号楼 |

  ​

- 非关系型数据库: 基于键值对的存储方式，数据之间没有耦合性，特点执行效率高

  如：mongodb

  ```js
  // 类似对象的键值对形式
  {
      "username": "gblw",
      "password": 123456,
      "uid": 007
  }
  ```

  ​

### MySQL 数据库软件

> MySQL 数据库软件中可以有多个数据库,每一个数据库中可以有多个表



#### 可视化工具 navicat

> MySQL 只是一个数据库软件，如果我们要创建数据库，或对数据库进行增删改查，刚开始可以用可视化工具来操作，让我们更加直观的了解数据库

##### 安装 navicat

##### 让 navicat 和 MySQL 建立连接

点击左上角 连接 => MySQL => 常规 => 端口 3306 => 



#### 数据库表的操作

##### 数据库的数据类型

> 也就是数据库中可以存储的数据类型(又叫做字段类型)

**字段类型**

- 整型 `int`

  ​	存储如年龄，产品数量，编号等。

- 小数类型  `float`  ,  `decimal `

  > 重量，工资，奖金，价格等使用decimal类型，实现小数的精确存储,一般用来存储与钱有关的数字。3.333333331

- 字符串型  `varchar(M)`，`char(M) `

  - M 为该字段可以存储的最多字符数(字节) ，如varchar(10)最大可以存储10个字节

  - varchar 一般用来存储长度变化比较大的字符串，如文章标题，商品名称	

  - char 存储长度比较固定的字符串，如手机号，身份证号，序列号，邮编

  - 此外可以使用text类型，存储较长的字符串，无需指定字符串的具体长度

- 日期时间型 `datetime`,  `date(年月日)`，`time(时分秒)`

**字段约束**

字段约束: 字段数据的属性规则（特征）

1. `not null` 不为空，可以限制字段值不能为空

2. `default`  默认值，可以设置字段的默认值，在没有录入时自动使用默认值填充。

3. `primary key`  主键 ：唯一标识，不能重复，不能为空 

   设置字段为主键，主键字段的值不能重复，不能为空。而且一个数据表中只能设置一个字段为主键，作为每行记录的唯一身份信息（索引）。

4. `auto_increment`  自动增长

   设置字段为自动增长，默认从1开始自动分配编号。自增长字段必须为一个key（索引，数据结构，便于快速查找数据，相当于书的目录），一般与 primary key 结合使用。类型必须为整型。

5. `unique key`  不能重复

   唯一键，设置字段的值为唯一的，可以设置多个字段为唯一键。唯一键字段的值可以为空。

   ​

##### 创建数据表

> 注意 创建表时，每个表必须有一个主键



## SQL-操作数据库的语言

> SQL：structured Query Language 结构化查询语言。

- 通过这个语言可以对数据库进行增删改查

SQL编写注意点:  注释用 `--` , 语句结束加分号 `;`



### 基本用法：增删改查

1. 插入数据 `insert`

```sql
-- insert into 表名 (字段列表) values (值列表)
insert into book (name, age, sex) values ('zs','18','m');
```

1. 修改数据 `update`

```sql
-- update 表名 set 字段名称1=值1,字段名称2=值2,... where 条件
-- 如果不加条件会修改表中所有对应的字段
update book set name='ls', age='30' where id=10;
```

1. 删除数据 `delete`

```sql
-- delete from 表名 where 条件
delete from book -- 会删除所有数据
delete from book where id=10;
```

1. 查询数据 select

```sql
-- select 字段列表 from 表名
select name, age from book -- 只查询表中 name 和 author 的信息 
-- select * from 表名 where 条件  * 表示所有字段
select * from book where id = 2;
select * from book where name='zs' and age=20;
```

### 高级用法

- `where` 条件

  查询时，不添加 where 条件,  返回数据表所有行。需要添加限定条件，只返回需要的行。

  ```sql
  -- select  字段列表 from  表名 where 条件；
  -- 条件 : =, >, <, >=, <=, and, or  
  ```

- `like` 模糊匹配  % 通配符

  ```sql
  -- 查找姓张的人
  select * from 表名 where name like '张%';​
  ```

- `in` 语法：一次查询多个符合条件的数据

  ```sql
  -- select * from 表名 where 字段 in (value1,value2,value3);
  select * from stu where name in ('zs', 'ls', 'ww'); -- 查找name值为zs, ls, ww 的数据
  ```

- `count()`  获取返回数据的总条数

  ```sql
  -- 查询满足条件数据的总条数	
  -- select count(*) from 表名 where 条件
  ```

- `order` 排序

  ```sql
  -- select * from 表名 order by  字段名称;   	  	默认升序
  -- select * from 表名 order by  age;  -- 按照年龄来排序
  -- select * from 表名 order by 字段名称 desc;      desc 表示降序
  ```

- `limit` 对结果集进行截取 一般用于取数据的前几条

  ```sql
  -- select *  from  表名  limit 截取的起始索引，截取的长度
  ```

- 联合查询（多个表联合查询）

  ```sql
  select 字段列表 from 表A join 表B on 表A.字段=表B.字段 where 条件
  join 将表A和表B联合起来
  on 根据什么字段把表A和表B联合起来
  
  select *  from  teacher  join class  on class.id=teacher.classid;  -- 老师表和班级表联合查询
  select teacher.*, class.classname  from  teacher  join class  on class.id=teacher.classid;   -- 老师表和班级表联合查询,但只显示老师表的全部内容和班级表的名称
  -- 注意: 多表联合查询时,字段要写明是那个表的字段 如  表.字段名
  ```



## PHP 操作数据库

### 连接数据库基本步骤

1. 连接数据库
2. 准备sql语句
3. 执行sql语句
4. 获取执行的结果并分析
5. 关闭数据库

### 操作数据库常用 API

- `mysqli_connect(IP, 用户名，密码，数据库名)，端口号`  连接数据库  

- `mysqli_query($link, $sql) ` 执行SQL语句

- `mysqli_error($link); ` 返回错误描述

- `mysqli_close($link);`  关闭连接

- `mysqli_fetch_assoc($res);` 从结果集中取得一行作为关联数组返回

- `mysqli_num_rows($res);` 返回结果集的行数

  ​

### sql 操作

- 使用 PHP 发送 SQL 语句前，可以先打印 SQL 语句，检查语句的正确性。
- 修改数据库的数据时, 使用变量拼接SQL语句=，字段的值为字符串类型时，需要在变量的两侧使用单、双引号包裹。可以将所有的字段外面都使用双引号包含。

```php
// 1. 连接数据库
// mysqli_connect(ip地址, 用户名, 密码, 数据库的名称, 端口号);
// 执行结果
//    1. 连接成功, 返回一个数据库连接对象
//    2. 连接失败, 返回 false
// @ 表示错误抑制符, 可以抑制错误的输出
$link = @ mysqli_connect('127.0.0.1', 'root', 'root', 'study', 3306);
// var_dump($link);

// 如果数据库连接失败
if ( !$link ) {
    echo "数据库连接失败"；
    return false;
    
	// 程序结束, die 方法, 终止当前程序执行, 输出一段语句
	die("数据库连接失败");  
}
echo "数据库连接成功<br>";

// 2. 准备 sql 语句: 删除一条数据
$sql = "delete from stu where id = 14";
$name = "gblw";
$age = 31;
$sq2 = "insert into stu (name, age) values ('$name', $age)";
// sql 语句一般用双引号包裹
// 如果语句中含有拼接的变量，需要用单引号包裹

// 3. 让数据库执行 sql 语句, 并分析结果
// mysqli_query(数据库连接对象, 要执行的sql语句)
// 非查询语句：执行成功返回 true, 执行失败返回 false

// 4. 根据结果不同做逻辑判断
if ( mysqli_query( $link, $sql ) ) {
    // 如果删除的数据不存在，也会返回 true，
    echo "删除成功";
}else {
    // sql 语句错误，才会返回 false
    echo "删除失败";
    // mysqli_error 可以查看错误消息
    echo mysqli_error($link);
}

// 查询语句： 成功返回结果集, 失败返回 false
// 数据查询不到也会返回结果集，只是数据条数为 0，sql 语句有错误才会返回 false
$res2 = mysqli_query( $link, $sq2 );
// $res2 是返回的结果集,是一个对象，表面上看没有我们要的数据,如果我们想要数据,需要调用mysqli_fetch_assoc($res2)去获取
// 结果集中 field_count 表示字段数，num_rows 表示查询到的数据条数
// 注意: mysqli_fetch_assoc($res2)执行一次,只会从结果集中拿一条数据出来(执行几次就拿出几条数据)

// 4. 根据结果不同做逻辑判断
if ( !$res ) {
    echo mysqli_error( $link );
    die('数据库查询失败');
}

// mysqli_fetch_assoc 查询成功, 从结果集中取数据, 以关联数组的形式返回
// 一次只取一条数据, 如果没取到, 返回 null
$arr = [];
while( $row = mysqli_fetch_assoc( $res ) ) {
    // 将值推到数组中
    $arr[] = $row;
}
// 也可以采用 for 循环遍历
// mysqli_num_rows($res) 方法返回获取到的数据条数 ，
for($i = 0; $i < mysqli_num_rows($res); $i++){
    // echo $i;
    $arr[] =  mysqli_fetch_assoc($res);
}
// echo '<pre>';
// print_r($arr);
// echo '</pre>';

// 5. 关闭数据库连接 (挂电话)
mysqli_close( $link );
```



### 数据库工具函数的封装

> 为了提高代码的复用性，把数据增删改的操作封装成一个方法

```php
  // 定义常量
  define( 'HOST', '127.0.0.1' );
  define( 'UNAME', 'root' );
  define( 'PWD', 'root' );
  define( 'DB', 'test02' );
  define( 'PORT', 3306 );

  // 非查询语句封装
  // 封装一个执行非查询语句的方法, 提高代码的复用性
  // 参数: $sql 要执行的 sql 语句
  // 返回值: true / false
  function my_exec( $sql ) {
    // 1. 连接数据库
    $link = @ mysqli_connect( HOST, UNAME, PWD, DB, PORT);

    if( !$link ) {
      echo '数据库连接失败';
      return false;
    }

    // 2. 准备 sql 语句, 就是传递过来的 $sql

    // 3. 执行 sql 语句, 分析结果
    if ( mysqli_query( $link, $sql ) ) {
      // 执行成功
      mysqli_close( $link ); // 关闭数据库
      return true;
    }
    else {
      // 执行失败
      mysqli_close( $link ); // 关闭数据库
      return false;
    }

  }

  // 查询语句的封装
  // 参数: $sql 要执行的 sql 语句
  // 返回值: 
  //    (1) 成功, 返回数据(二维数组)
  //    (2) 失败, 返回 false
  function my_query( $sql ) {

    // 1. 建立连接
    $link = @ mysqli_connect( HOST, UNAME, PWD, DB, PORT );
    if ( !$link ) {
      echo "数据库连接失败";
      return false;
    }

    // 2. 准备 sql 语句 $sql
    // 3. 执行 sql 语句, 分析结果
    $res = mysqli_query( $link, $sql );  // 结果集 或者 false

    if ( !$res ) {
      echo "获取数据失败<br>";
      echo mysqli_error($link);
      mysqli_close( $link );
      return false;
    }

    // 得到结果集, 将结果集的所有内容取出到数组中
    $arr = [];
    while ( $row = mysqli_fetch_assoc($res) ) {
      $arr[] = $row;
    }

    mysqli_close( $link );
    return $arr; // 返回结果数组
  }
```



## 学生管理系统2.0

### 基本功能

- 添加学生功能
- 展示学生列表功能
- 删除学生功能
- 查看学生详情
- 更新学生数据



### 实现思路

**注册功能思路：**

1. 表单设计，点击提交按钮向服务器提交表单数据
2. 在后台获取表单提交的数据，保存到数据库中
   - 先获取表单的标签的数据
   - 保存上传的图片（并保存图片存储的路径）
   - 将表单的数据和图片的路径一起保存到数据库中
3. 保存完成，跳转到列表页，查看新添加的数据

**展示功能思路：**

1. 先从数据库中获取数据（二维数组arr）
2. 遍历二维数组，将数组中数据渲染到页面中

**删除功能思路：**

1. 获取要删除数据的id
2. 根据id删除数据库中指定的数据
3. 删除完毕，返回列表页

**详情展示功能**

1. 获取要查看详情数据的id
2. 根据id通过联合查询，获取到需要用数据
3. 把数据显示在页面中
4. 点击返回按钮，可以返回到列表页

**更新数据思路：**
更新数据的思路=先渲染  再  提交

1. 获取要查看详情数据的id
2. 把对应id的数据填充到修改页面中
3. 点击修改按钮，获取表单的数据，提交给服务器
4. 在服务器更新数据
5. 更新完成后跳转到列表页

```html
	隐藏域表单：和其他表单标签一样，只是看不到而已
	  <input type="hidden" name="id"  value="<?php echo $data['id'] ?>">
```



## COOKIE 和 SESSION

**会话**：浏览器与服务器之间的数据交流。



### HTTP 协议特点：

**无状态的,  多次请求之间没有相关性**

> 即同一用户请求同一网站的不同页面，服务器无法识别是否是同一用户发起的请求。因此，用户无法进行连续的业务逻辑。

如：登录，已在A页面登录，请求B页面，提示未登录。



### `cookie`

- 在浏览器端的存储数据的容器

- 可以使用 js 对 cookie 进行操作

- cookie 允许服务器脚本（PHP脚本）在浏览器端存储数据

- **cookie 特点**：在 cookie 中数据设置后，浏览器再次请求服务器指定页面时，会自动携带 cookie 中的数据到服务器，在服务器中可以获取 cookie 中的数据；

- 浏览器查看 cookie 数据 `F12 > Application > Storage > Cookies`


#### js 操作 cookie（了解）

```js
// 设置 cookie
document.cookie = 'name=zs';
document.cookie = 'pwd=123';

// 获取 cookie 中的值
document.cookie;
```

#### jquery.cookie.js 插件操作 cookie

```javascript
// 向页面中引入插件js文件，基于jquery的 
$.cookie(键,值,[{expires:过期天数}]); // expires 可选 是个对象 不设置默认为一个会话的时间
// 一个会话的时间指从发出请求到浏览器关闭
$.cookie('age',18,{expires:1}); // 设置cookie 过期时间为1天
$.cookie('name'); // 获取指定cookie
$.removeCookie('name'); // 删除指定cookie
```

#### PHP 操作 cookie(服务器端操作cookie)

```php
// 设置 cookie
setcookie('键','值'); // 默认一个会话的时间
setcookie('键','值'，'有效期'); // 有效期是一个时间戳
// 如果有效期为之后的时间，即为设置，若有效期设置为之前的时间，即为删除
setcookie('键',''，time()+1000); // 设置
setcookie('键',''，time()-1000); // 删除
// 获取 cookie
// $_COOKIE是PHP的超全局变量，内部存放有浏览器传过来的cookie数据，$_COOKIE只能用于获取数据
$_COOKIE['键'];
```

**注意点：**

- cookie 中的数据可以被同一个网站的页面所共享
- 不同浏览器的 cookie 不能共享
- cookie 的数据存储在浏览器中，每次请求服务器，在请求报文中携带 cookie 的数据，发送给服务器
- 服务器端无法直接操作 cookie，是通过在服务器端设置响应头的的方式，通知浏览器对 cookie进行设置
- cookie 中的数据有效期，不设置是会话级别的, 浏览器关闭，会话结束，数据销毁
- cookie 存储容量小，约 4kb
- 存储的 cookie 值中不要出现空格，等号，分号

**思考?**

cookie 是浏览器中的容器，php是运行在服务器端的脚本语言，为什么php可以设置cookie和获取cookie

因为：当 setcookie 执行的时候，实际上是在响应头中添加了一个信息，浏览器接受到之后，会根据添加的这个信息去操作 cookie；浏览器再次请求对应的网站的时候，会自动把 cookie 中的数据，存放到请求头中，发送给服务器，所以服务器端使用 $_COOKIE 可以接受



### `session`

- 在服务器端存储数据的容器
- session 容器是一个数组的形式，通过超全局变量 $_SESSION 进行取值和设置
- session 在使用前，必须先 session_start 开启session 机制
- session 中的数据可以被当前网站所共享

#### session 的基本操作

**开启 session 机制**  (使用session前必须调用此方法)

```php
 session_start(); // 开启 session 会话或者重用已经创建的会话
```



注意点：

1. 会在服务器中自动对每个第一次访问的用户, 随机生成一个 sessionID

2. 再根据 sessionID, 自动创建一个session会话文件，在其中存储该用户的数据

3. 响应时, 在响应头中设置set-cookie, 存放该用户的 sessionID

4. 将来浏览器端根据响应头, 将 sessionId 存到 cookie 中, 并在下一次请求时携带

5. 下次访问时, 服务器端就会根据 sessionId 找到该用户的会话文件, 我们可以从session中读取用户信息, 实现会话保持

   ​

**设置和获取 session 中的数据 ** (通过超全局变量$_SESSION进行操作)

```php
// 设置
$_SESSION['键']='值'; 
// 删除
unset($_SESSION['键']);
// 清空 session
$_SESSION=[];
// 直接删除 session 会话文件，PHP 脚本将无法读取 session 数据
session_destroy();
// 获取 session 的 id
session_id();
```



### COOKE 和 SESSION 的应用--登录状态保持

登录模块的基本思路：

1. 如果用户登录成功，在服务器中记录用户的登录状态

   - session_start(),  对于第一次访问的用户, 会自动生成 sessionId, 并创建session文件，

   - 我们需要在 session 文件中，记录当前用户的信息

   - 通过响应头，给浏览器的 cookie 设置 sessionID

     ```php
     if($name=='zs'&&$pwd=='666'){  
       // 登录成功, 将该用户唯一标识存到 session 中
       // 该用户数据库中 id 为 1
       $id = 1;
       session_start();
       $_SESSION['userid']=$id;
     }
     ```

     ​

2. 后续访问其他页面（个人中心），浏览器会自动发送 cookie 中存放的 sessionID 到服务器

3. 服务器会浏览器传递根据 sessionID，找到对应的 session 文件，查看其中是否存放有当前用户的信息

   - 是： 用户已登录 ，正常浏览

   - 否：用户未登录，跳转到登录页

     ```php
     session_start();
     if(!empty($_SESSION['userid'])){
       // 正常浏览
     }else{ 
       header('location:./04-login.html');
       die();// 后面代码不执行
     }
     ```

