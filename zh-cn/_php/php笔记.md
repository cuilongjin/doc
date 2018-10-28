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