# nodejs基本介绍

## 为什么要学习nodejs

1. 降低编程语言切换的成本(nodejs实质上用的还是javascript)
2. NodeJS是前端项目的基础设施，前端项目中用到的大量工具 (大前端)
3. nodejs在处理高并发上有得天独厚的优势(利用nodejs做中间层)
4. 对于前端工程师，面试时对于nodejs有一定的要求

## node.js 是什么？

node.js，也叫作node，或者nodejs，指的都是一个平台

1. [node.js官方网站](https://nodejs.org/)
2. [node.js中文网](http://nodejs.cn/)
3. [node.js 中文社区](https://cnodejs.org/)

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，nodejs 允许 javascript 代码运行在服务端

```
1. nodejs不是一门新的编程语言，nodejs是在服务端运行javascript的运行环境
2. 运行环境：写得程序想要运行必须要有对应的运行环境
	php代码必须要有apache服务器
	在web端，浏览器就是javascript的运行环境
	在node端，nodejs就是javascript的运行环境
2. javascript并不只是能运行在浏览器端，浏览器端能够运行js是因为浏览器有js解析器，因此只需要有js解析器，任何软件都可以运行js。
3. nodejs可以在服务端运行js，因为nodejs是基于chrome v8的js引擎
```

**nodejs的本质：不是一门新的编程语言，nodejs是javascript运行在服务端的运行环境，编程语言还是javascript**

## nodejs与浏览器的区别

相同点：nodejs与浏览器都是js的运行环境，都能够解析js程序。对于ECMAScript语法来说，在nodejs和浏览器中都能运行

不同点：nodejs无法使用DOM和BOM的操作，浏览器无法执行nodejs中的文件操作等功能

![](./images/nodejs.png)

## nodejs可以干什么？

1. 开发服务端程序
2. 开发命令行工具（CLI），比如npm，webpack，gulp，less，sass等
3. 开发桌面应用程序（借助 node-webkit、electron 等框架实现）



# 安装nodejs

## nodejs版本

下载地址

- [当前版本](https://nodejs.org/en/download/)
- [历史版本](https://nodejs.org/en/download/releases/)

官网术语解释

- LTS 版本：Long-term Support 版本，长期支持版，即稳定版。
- Current 版本：Latest Features 版本，最新版本，新特性会在该版本中最先加入

查看node版本

```bash
node -v
```



# 运行nodejs程序

## 方式一：使用node执行js文件

+ 创建js文件 `helloworld.js`

- 写nodejs的内容：`console.log('hello nodejs')`
- 打开命令窗口 `cmd`
  - shift加右键打开命令窗口，执行 `node 文件名.js`即可
- 执行命令：`node helloworld.js`

注意：在nodejs中是无法使用DOM和BOM的内容的，因此`document`， `window`等内容是无法使用的

## 方式二：REPL介绍

1. REPL 全称: Read-Eval-Print-Loop（交互式解释器）
   - R 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中
   - E 执行 - 执行输入的数据结构
   - P 打印 - 输出结果
   - L 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出
2. 在REPL中编写程序 （类似于浏览器开发人员工具中的控制台功能）
   - 直接在控制台输入 `node` 命令进入 REPL 环境
3. 按两次 Control + C 退出REPL界面 或者 输入 `.exit` 退出 REPL 界面
   - 按住 control 键不要放开, 然后按两下 c 键

## 环境变量

当要求系统运行一个**程序** 而没有告诉它程序所在的完整路径时

1. 首先在**当前目录**中查找和该字符串匹配的可执行文件
2. 进入用户 path 环境变量查找
3. 进入系统 path 环境变量查找

配置环境变量：

```javas
找到环境变量：计算机 --右键--> 属性 --> 高级系统设置 --> 高级 --> 环境变量
```



# ES6（ECMAScript）

ECMAScript 6.0（以下简称 ES6）是在 2015 年 6 月正式发布的标准。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

## let 与 const

> ES6中提供了两个声明变量的关键字：const 和 let

### let 的使用

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`

- let声明的变量只有在当前作用域(块作用域)有效

```js
if (true) {
  var a = 1
  let b = 2
}

console.log(a) // 1
console.log(b) // b is not defined
```

- 不存在变量提升

```js
console.log(b) // b is not defined
let b = 2
```

- 不允许重复声明

```js
let a = 10
let a = 1 // SyntaxError: Identifier 'a' has already been declared
```

### const 的使用

`const`声明一个常量。常量：代码执行的过程中，不可以修改常量里面的值 

- const 声明的量不可以改变

```js
const PI = 3.1415
PI = 3 // TypeError: Assignment to constant variable
```

- const 声明的变量必须赋值

```js
const num
// SyntaxError: Missing initializer in const declaration
```

- 如果 const 声明了一个对象，仅仅保证地址不变，可以修改对象的属性

```js
const obj = {name: 'zs'}
obj.age = 18 // 正确
obj = {} // TypeError: Assignment to constant variable
```

- 其他用法和let一样

```js
1. 只能在当前代码块中使用
2. 不会提升
3. 不能重复声明
```

### 

## 模板字符串(模板字面量)

模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能

```js
// 1. 通过``可以定义一个字符串
let str = `hello world`

// 2. 模板字符串内部允许换行
let str = `
  hello
  world
`

// 3. 模板字符串内部可以使用表达式
let str = `
	你好，我是${name}
`
```



## 箭头函数

ES6标准新增了一种新的函数：Arrow Function（箭头函数）

为什么叫Arrow Function？因为它的定义用的就是一个箭头

### 基本使用

```js
let fn = function(x, y) {
    console.log(x + y)
}

相当于
// 语法： (参数列表) => {函数体}
let fn = (x, y) => {
    console.log(x + y)
}
```

### 参数详解

- 如果没有参数列表，使用()表示参数列表

```js
let sum = function() {    
    console.log('哈哈')
}
// 等同于：
let sum = () => {
    console.log('哈哈')
}
```

- 如果只有一个参数，可以省略()

```js
let sum = function(n1) {    
    console.log('哈哈')
}

// 等同于：
let sum = n1 => {
    console.log('哈哈')
}

```

- 如果有多个参数，需要使用 () 把参数列表括起来

```js
let sum = function(n1, n2) {    
    console.log('哈哈')
}
// 等同于：
let sum = (n1, n2) => {
    console.log('哈哈')
}
```

### 返回值详解

- 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来

```js
let sum = function(n1) {    
    console.log('哈哈')
    return n1
}
// 等同于：
let sum = n1 => {
    console.log('哈哈')
   	return n1
}
```

- 如果函数体只有一行一句，并且需要返回这个值，那么可以省略 {} 和 return

```js
let fn = function(n1, n2) {
    return n1 + n2
}

let fn = (n1, n2) => n1 + n2
```



### 箭头函数的注意点

1. 箭头函数内部没有this，因此箭头函数内部的this指向了外部的this
2. 因为箭头函数没有this，因此箭头函数不能作为构造函数

【定义一个对象，定时器打招呼】

```javascript
let obj = {
  name: 'zs',
  sayHi: function() {
    setInterval(() => {
      console.log('大家好，我是' + this.name)
    }, 1000)
  }
}

obj.sayHi()
```
