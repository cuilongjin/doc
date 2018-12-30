# ES6（ECMAScript）

ECMAScript 6.0（以下简称 ES6）是在 2015 年 6 月正式发布的标准。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

## let 与 const

> ES6 中提供了两个声明变量的关键字：const 和 let

### let 的使用

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`

- let声明的变量只有在当前作用域(块作用域)有效

```js
if (true) {
  var a = 1
  let b = 2
}

console.log(a) // 1
console.log(b) // ReferenceError: b is not defined
```

- 不存在变量提升

```js
console.log(b) // ReferenceError: b is not defined
let b = 2
```

- 不允许重复声明

```js
let a = 10
let a = 1 // SyntaxError: Identifier 'a' has already been declared
```

- 不绑定全局作用域

```javascript
var c = 1
console.log(window.c) // 1
let c = 1
console.log(window.c) // undefined
```

- 

```javascript
let a = 1
{
	console.log(a) // 报错
    let a = 2
}
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
4. 不绑定全局作用域
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

- 给参数指定默认值

```javascript
let a = (n = 1) => console.log(n)
a() // 1
a(3) // 3
```

- 不存在 prototype 这个属性。

```javascript
let a = () => {}
console.log(a.prototype) // undefined
```

- 没有 arguments

  箭头函数没有自己的 arguments 对象，箭头函数可以访问外围函数的 arguments 对象

```javascript
function a () {
  return () => arguments
}
console.log(a(1, 2)()) // [Arguments] { '0': 1, '1': 2 }

// 访问箭头函数的参数
// Rest 参数接受函数的多余参数组成一个数组
let a = (a, b, ...Args) => console.log(Args)
a(1, 2, 3, 4, 5) // [3, 4, 5]
console.log(a.length) // 2
```



- Rest参数和arguments对象的区别：

rest参数只包括那些没有给出名称的参数，arguments包含所有参数

rest 参数之后不能再有其他参数，否则会报错

函数的 length 属性，不包括rest参数

arguments 对象不是真正的数组，而 rest 参数是数组实例，可以直接使用数组的方法

arguments 对象拥有一些自己额外的功能



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
3. 不能用 call()、apply()、bind() 这些方法改变 this 的指向

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

