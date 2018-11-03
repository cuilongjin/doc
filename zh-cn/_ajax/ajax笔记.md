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