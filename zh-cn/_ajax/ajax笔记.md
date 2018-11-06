# 前言

我们使用php动态渲染页面时，有很多比较麻烦的地方。

- 在前端写好页面以后，需要后台进行修改，意味这后端程序员也需要懂前端的知识，其实渲染的工作应该交给前端来做。
- 前端没有写好页面的话，后端无法开始工作，需要等待前端的页面完成之后才能开始工作，拖延项目的进度。
- 这种渲染，属于同步渲染，先获取数据, 如果数据获取的慢了, 会严重影响整个页面渲染速度, 且数据更新需要页面刷新



## http 协议回顾

> HTTP协议，即超文本传输协议(Hypertext transfer protocol)。是一种详细规定了浏览器和服务器之间互相通信的规则
>
> HTTP协议规定了**请求** 和**响应** 的标准

### 请求与请求报文

**get请求的请求报文详解** 

```javascript
//--------------------------请求行--------------------------------
// GET  请求方式
// /day02/01.php?username=pp&password=123456    请求路径+参数（注意点）
// HTTP/1.1 HTTP的版本号
GET /day02/01.php?username=pp&password=123456 HTTP/1.1

//--------------------------请求头--------------------------------
Host: www.study.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
Accept-Encoding: gzip, deflate, sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

//----------------------------请求体-------------------------------------
//get请求没有请求体，但是参数会拼接到请求行中
```



**POST请求的请求报文** 

```javascript
//-----------------------请求行---------------------------------------------
POST /day02/01.php HTTP/1.1

//-----------------------请求头--------------------------------------------
Host: www.study.com
Connection: keep-alive
//传递的参数的长度。
Content-Length: 29
Cache-Control: max-age=0
Origin: http://www.study.com
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
//内容类型：表单数据，如果是post请求，必须指定这个属性。
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
Referer: http://www.study.com/day02/01-login.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

//------------------------请求体------------------------------------------
username=pp&password=123456
```

**GET请求与POST请求的对比** 

- GET请求没有请求体，因为GET请求的参数拼接到地址栏中了

- POST请求有请求体，就是传递的参数


### 响应与响应报文

```javascript
//---------------------状态行（响应行）-------------------------------
//HTTP/1.1  HTTP版本
//200 响应的状态
	//200表示成功
	//304表示读缓存
	//404表示找不到资源
	//500表示服务端错误
HTTP/1.1 200 OK

//----------------------响应头-----------------------------------------------
Date: Thu, 22 Jun 2017 16:51:22 GMT
Server: Apache/2.4.23 (Win32) OpenSSL/1.0.2j PHP/5.4.45
X-Powered-By: PHP/5.4.45
Content-Length: 18
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
//内容类型，告诉浏览器该如何解析响应结果
Content-Type: text/html;charset=utf-8
//-----------------------响应体------------------------------------------------
hello world
```



# AJAX

> 即 Asynchronous [e'sɪŋkrənəs] Javascript And XML， AJAX 不是一门新的语言，而是对现有技术的综合利用。 本质是在HTTP协议的基础上以异步的方式与服务器进行通信

## 同步与异步

**同步和异步概念：**

同步：指的就是事情要一件一件做。等做完前一件才能做后一件任务

异步：不受当前任务的影响，两件事情同时进行，做一件事情时，不影响另一件事情的进行

编程中：异步程序代码执行时不会阻塞其它程序代码执行，从而提升整体执行效率



**网页异步应用：**

1. 验证你的用户名是否已经存在（一边输入，一边获取你的信息，和后台比对）。
2. 百度搜索提示，及相关内容展示（一边输入，一边找出了你可能要的内容）。
3. 新浪微博评论（异步加载）。

XMLHttpRequest 可以以异步方式的请求数据处理程序,  可实现对网页的部分更新， 而不是刷新整个页面



## XMLHttpRequest 对象

> 浏览器内建对象，用于与服务器通信(交换数据) ， 由此我们便可实现对网页的部分更新，而不是刷新整个页面。这个请求是异步的，即在往服务器发送请求时，并不会阻碍程序的运行，浏览器会继续渲染后续的结构。



### 发送 get 请求

XMLHttpRequest 以异步的方式发送 HTTP 请求，因此在发送请求时，一样需要遵循 HTTP 协议。

**使用 XMLHttpRequest 发送 get 请求的步骤**

```javascript
// 1. 创建一个 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 2. 设置请求行
// 第一个参数:请求方式  get/post
// 第二个参数:请求的地址 需要在url后面拼上参数列表
// 第三个参数：true 为异步，false为同步，默认为true，设为false没有意义
xhr.open("get", "01.php?name=zs");

// 3. 设置请求头(get不用设置)
// 请求头中可以设置 Content-Type,用以说明请求主体的内容是如何编码
// get 请求时没有请求体,无需设置请求头

// 4. 设置请求体
// get 请求的请求体为空,因为参数列表拼接到 url 后面了
xhr.send(null); // 参数为 null 或什么都不写
```

注意点 :

- get 请求，设置请求行时，需要把参数列表拼接到 url 后面
- get 请求不用设置请求头，不用说明请求主体的编码方式
- get 请求的请求体为 null

### 发送 post 请求

```javascript
// 1. 创建一个 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 2. 设置请求行 post请求的参数列表在请求体
xhr.open("post", "02.php");

// 3. 设置请求头, post 请求必须要设置 content-type, 标记请求体内容的解析方式
// 如果不设置请求头,请求能够发送出去，但是后端无法解析获取数据
xhr.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );

// 4. 设置请求体
xhr.send( "name=Jepson&age=18" );
```

注意点 :

- post 请求，设置请求行时，不拼接参数列表
- post 必须设置请求头中的 content-type 为 `application/x-www-form-urlencoded`， 标记请求体解析方式
- post 请求需要将参数列表设置到请求体中



### 获取响应 readyState

`readyState`：记录了 XMLHttpRequest 对象的当前状态

readyState 有五种可能的值：

* xhr.readyState = 0时，UNSENT open尚未调用
* xhr.readyState = 1时，OPENED open已调用
* xhr.readyState = 2时，HEADERS_RECEIVED 接收到头信息
* xhr.readyState = 3时，LOADING 接收到响应主体
* `xhr.readyState = 4` 时，DONE 响应完成



HTTP 响应分为 3 个部分，状态行、响应头、响应体。

```javascript
// 给xhr注册一个 onreadystatechange 事件，当 xhr 的状态发生状态发生改变时，会触发这个事件。
// onreadystatechange 只会监听 2， 3， 4 的状态变化
xhr.onreadystatechange = function () {
	console.log(xhr.readyState);
    if(xhr.readyState == 4){
    //1. 获取状态行
    	console.log("状态行:"+xhr.status); // 成功返回 200
        if(xhr.status == 200) {
            //2. 获取响应头
            console.log("所有的响应头:"+xhr.getAllResponseHeaders());
            console.log("指定响应头:"+xhr.getResponseHeader("content-type"));
            //3. 获取响应体
    		console.log(xhr.responseText);
      	}
  	}
}
```

### 案例

【判断用户名是否存在】

【用户登录案例】

【聊天机器人案例】



## 数据交互

> 浏览器端只是负责用户的交互和数据的收集以及展示，真正的数据都是存储在服务器端的。
>
> 我们现在通过ajax的确可以返回一些简单的数据（一个字符串），但是在实际开发过程中，肯定会会设计到大量的复杂类型的数据传输，比如数组、对象等，但是每个编程语言的语法都不一样。
>
> 因此我们会采用通过的数据交换格式（ `XML` 、`JSON` ）来进行数据的交互。



### XML(了解即可)

**什么是XML**

- XML 指可扩展标记语言（EXtensible Markup Language）
- XML 是一种标记语言，很类似 HTML
- XML 的设计宗旨是传输数据，而非显示数据
- XML 标签没有被预定义。您需要自行定义标签。

**语法规范**

- 第一行必须是版本信息
- 必须有一个根元素（有且仅有一个）
- 标签不可有空格、不可以数字或.开头、大小写敏感
- 不可交叉嵌套，都是双标签，如果是单标签，必须闭合
- 属性双引号（浏览器自动修正成双引号了）
- 特殊符号要使用实体
- 注释和HTML一样

```xml
<?xml version="1.0" encoding="utf-8" ?>
<students>
    <student>
        <name>张三</name>
        <age>18</age>
        <gender>男</gender>
        <desc>路人甲</desc>
    </student>
    <student>
        <name>李四</name>
        <age>20</age>
        <gender>男</gender>
        <desc>路人乙</desc>
    </student>
</students>
```

**php 获取 xml 文件的内容**

```php
// 注意: 如果需要返回 xml 数据, 需要将 content-type 改成 text/xml, 不然浏览器以 text/html 解析
header( 'content-type:text/xml;charset=utf-8' );
// file_get_content 用于获取文件的内容
// 参数: 文件的路径
$result = file_get_content( "data.xml" );
echo $result;
```

**js 解析 xml**

```javascript
// 获取服务端返回的xml数据，需要使用 xhr.responseXML，这是一个 document 对象，可以使用 DOM 中的方法查找元素。
var data = xhr.responseXML;
// 获取所有的学生
var students = data.querySelectorAll("student");
```

缺点：虽然可以描述和传输复杂数据，但是其解析过于复杂,  并且体积较大，所以实现开发已经很少使用了。



### JSON 数据

`JSON ` (JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript 规范，采用独立于编程语言的文本格式来存储和表示数据。

- 数据在键值对中
- 数据由逗号分隔(最后一个 键值对 不能带逗号)
- 花括号保存对象，方括号保存数组
- 键使用双引号

```javascript
var obj = {a: 'Hello', b: 'World'}; // 这是一个对象

// 这是一个 JSON 字符串，本质是一个字符串
var json = '{"a": "Hello", "b": "World"}';
```

**JSON 数据在不同语言进行传输时，类型为字符串，不同的语言各自也都对应有解析方法，解析完成后就能很方便的使用了**



#### php 处理 json

- php关联数组 ==>  json   ( json_encode )

```php
// php的关联数组
$obj = array(
  "a" => "hello",
  "b" => "world",
  "name" => "鹏鹏"
);
// json字符串
$json = json_encode( $obj );
echo $json;
```

- json ==> php对象/关联数组	( json_decode )

```php
$json = '{"a": "Hello", "b": "World"}'; // json字符串
// 第一个参数：json字符串
// 第二个参数：
// false，将json转换成对象(默认)
// true：将json转换成数组(推荐)
$obj = json_decode($json,true);
echo $obj['a'];

// 通过json文件获取到的内容就是一个json字符串。
$data = file_get_contents("data.json");
// 将json转换成数组
$result = json_decode($data, true);
print_r($result);
```



#### JS 处理 json

- ` JSON.stringify(obj)` ：JS对象 ==> JSON字符串

```javascript
var obj = {a: 'Hello', b: 'World'}
var result = JSON.stringify(obj); // '{"a": "Hello", "b": "World"}'
```

- ` JSON.parse(obj)`  ：JSON字符串 ==> JS对象

```javascript
var json = '{"a": "Hello", "b": "World"}';
var obj = JSON.parse(json); // {a: 'Hello', b: 'World'}
```

【案例：获取表格数据.html】



## 兼容性处理 (了解, 不用处理)

现在一般最多兼容到 IE8,  这里以后见到了知道是在处理兼容性就行了

```javascript
var xhr = null;
if(XMLHttpRequest){
  //现代浏览器 IE7+
  xhr = new  XMLHttpRequest();
}else{
  //老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
  xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```



## 封装 ajax 工具函数

> 每次发送ajax请求，其实步骤都是一样的，重复了大量代码，我们完全可以封装成一个工具函数。

```javascript
//1. 创建xhr对象
//2. 设置请求行
//3. 设置请求头
//3. 设置请求体
//4. 监听响应状态
//5. 获取响应内容
```

### 参数提取

| 参数名   | 参数类型 | 描述           | 传值                      | 默认值                                                |
| -------- | -------- | -------------- | ------------------------- | ----------------------------------------------------- |
| type     | string   | 请求方式       | get/post                  | 只要不传post，就是get                                 |
| url      | string   | 请求地址       | 接口地址                  | 如果不传地址，不发送请求                              |
| async    | boolean  | 是否异步       | true/fase                 | 只要不传false，那就是true，异步请求                   |
| data     | object   | 请求数据       | `{key:value,key1:value2}` | 需要把这个对象拼接成参数的格式 uname=hucc&upass=12345 |
| dataType | string   | 返回的数据类型 | xml/json/text             | text                                                  |
| success  | function | 响应成功时调用 | -                         | -                                                     |
| error    | function | 响应失败时调用 | -                         | -                                                     |



### 参数检测

```javascript
// 要求参数obj必须传递，否则直接不发送请求
if(!obj || typeof obj !== "object"){
  return;
}
// 如果type传递的是post，那就发送post请求，否则发送get请求
var type = obj.type == "post"?"post":'get';
var url = obj.url;
if(!url){
  return;
}
// 只有当async传递了false，才会发送同步请求，不然只发送异步请求
var async = obj.async == false? false:true;
```



### 完整版本

```javascript
var $ = {
  ajax: function (options) {
    // 如果options参数没有传递，直接返回。
    if (!options || typeof options !== "object") {
      return;
    }
    
    // 处理默认参数
    // 如果参数不是post，那就默认为get
    var type = options.type == "post" ? "post" : "get";
    // 如果没有传url，那就传当前地址
    var url = options.url || location.pathname;
    // 如果参数不是false，那就默认是true，发异步请求
    var async = options.async == false ? false : true;
    
    var params = this.getParams(options.data);
    
    var xhr = new XMLHttpRequest();
    
    // 设置请求行
    if (type == "get") {
      url = url + "?" + params;
    }
    xhr.open(type, url, async);
    
    // 设置请求头
    if (type == "post") {
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    }
    // 设置请求参数
    xhr.send(params);
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          /*根据响应头的content-type属性指定方法接收到的内容*/
          var contentType = xhr.getResponseHeader('content-type');
          var data = null;
          if (contentType.indexOf('json') > -1) {
            data = JSON.parse(xhr.responseText);
          } else if (contentType.indexOf('xml') > -1) {
            data = xhr.responseXML;
          } else {
            data = xhr.responseText;
          }
          /*执行成功函数*/
          options.success && options.success(data);
        } else {
          options.error && options.error(xhr.responseText);
        }
      }
    }
  },
  getParams: function (obj) {
    // 将obj对象转换成参数
    // 将对象转换成参数列表
    if (!obj) {
      return null;
    }
    var arr = [];
    for (var k in obj) {
      arr.push(k + "=" + obj[k]);
    }
    return arr.join("&");
  }
}
```

【登录案例】
