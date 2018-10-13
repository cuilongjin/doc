# JavaScript 高级



## 课程大纲

![课程大纲](images/dagang.png)



## 面向对象编程

### 基本概念

> Everything is object （万物皆对象）

对象到底是什么，我们可以从两次层次来理解。

**(1) 对象是具体事物的抽象。**

一本书、一辆汽车、一个人都可以是对象，当实物被抽象成对象，实物之间的关系就变成了对象之间的关系，从而就可以模拟现实情况，针对对象进行编程。

问： 书是对象吗

**(2)对象是无序键值对的集合，其属性可以包含基本值、对象或者函数**

每个对象都是基于一个引用类型创建的，这些类型可以是系统内置的原生类型，也可以是开发人员自定义的类型。

### 什么是面向对象？

面向对象编程 —— Object Oriented Programming，简称 OOP ，是一种编程开发思想。

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。
因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。

**面向对象与面向过程：**

- 面向过程就是亲历亲为，事无巨细，有条不紊，面向过程是解决问题的一种思维方式，（执行者的角度）
  - 关注点在于解决问题的过程（先xx，然后xx，在xx）；
- 面向对象就是找一个对象，让她去做这件事情（指挥者的角度）
  - 关注点在找到能解决问题的对象上。
- 面向对象不是面向过程的替代，而是面向过程的封装

**面向对象的特性：**

- 封装性
  - 将功能的具体实现，全部封装到对象的内部，外界使用对象时，只需要关注对象提供的方法如何使用，而不需要关心对象的内部具体实现，这就是封装。
- 继承性
  - 在js中，继承的概念很简单，一个对象没有的一些属性和方法，另外一个对象有，拿过来用，就实现了继承。
  - **注意：在其他语言里面，继承是类与类之间的关系，在js中，是对象与对象之间的关系。**
- [多态性]
  - 多态是在强类型的语言中才有的。js是弱类型语言，所以JS不支持多态

## 创建对象的方式

### 内置构造函数创建

我们可以直接通过 `new Object()` 创建：

```javascript
//在js中，对象有动态特性，可以随时的给一个对象增加属性或者删除属性。
var person = new Object()
person.name = 'zs';
person.age = 18;
person.sayName = function () {
  console.log(this.name);
}
```
缺点：麻烦，每个属性都需要添加。

### 对象字面量创建

```javascript
var person = {
  name: 'zs',
  age: 18,
  sayName: function () {
    console.log(this.name);
  }
}
```
缺点：无法批量生成多个对象，代码冗余

### 简单改进：工厂函数

我们可以写一个函数，解决代码重复问题

```javascript
function createPerson (name, age) {
  return {
    name: name,
    age: age,
    sayName: function () {
      console.log(this.name);
    }
  }
}
```
然后生成实例对象：

```javascript
var p1 = createPerson('zs', 18);
var p2 = createPerson('ls', 18);
```
缺点：没有解决对象识别的问题，创建出来的对象都是Object类型的。

### 继续改进：自定义构造函数

构造函数是一个函数，用于实例化对象，需要配合new操作符使用。

```javascript
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  }
}
var p1 = new Person('zs', 18);
p1.sayName(); // zs
var p2 = new Person('ls', 23);
p2.sayName(); // ls
```



### 构造函数的缺点

使用构造函数带来的最大的好处就是创建对象更方便了，但是其本身也存在一个浪费内存的问题：

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log('hello' + this.name);
    }
}
var p1 = new Person('zs', 18);
var p2 = new Person('ls', 16);
console.log(p1.sayHello == p2.sayHello); // false
```


解决方案：

```javascript
function sayHello() {
  console.log('hello ' + this.name);
}
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = sayHello;
}

var p1 = new Person('zs', 18);
var p2 = new Person('ls', 16);
console.log(p1.sayHello === p2.sayHello); // true
```
缺点：会暴漏很多的函数，容易造成全局变量污染。



>  术语：
>
> 1. 实例（实例对象）： 通过构造函数创建出来的对象，叫做实例，实例可以有多个
> 2. 实例化： 构造函数创建对象的过程
> 3. 成员： 对象的属性和方法



## 原型

### 原型基本概念

Javascript 规定，每一个函数都有一个 `prototype` 属性，属性值是 一个对象，这个对象就叫做原型（原型对象），这个对象的所有属性和方法，都会被构造函数的实例继承。

这也就意味着，我们可以把所有对象实例需要共享的属性和方法直接定义在 `prototype` 对象上。

```javascript
function Person (name, age) {
  this.name = name；
  this.age = age；
}

console.log(Person.prototype)；
Person.prototype.sayName = function () {
  console.log(this.name)；
}
var p1 = new Person(...)；
var p2 = new Person(...)；
console.log(p1.sayName === p2.sayName)； // true
```

这时所有实例的 `sayName()` 方法，其实都是同一个内存地址



### `__proto__`

任意对象都有 `__proto__` 属性，这个属性指向了构造函数的prototype属性，也就是原型对象。

获取原型对象：

- 通过 `构造函数.prototype` 可以获取
- 通过 `实例.__proto__` 可以获取（隐式原型）
- 它们指向了同一个对象 `构造函数.prototype === 实例.__proto__`



**注意：`__proto__`是浏览器的一个隐藏（私有）属性，IE浏览器不支持，不要通过它来修改原型里的内容，如果要修改原型中的内容，使用构造函数.prototype去修改**



### constructor 属性

默认情况下，原型对象中只包含了一个属性：constructor，constructor 属性指向了当前原型对象的构造函数。

```javascript
function Person(){

}

console.log(Person.prototype);
console.log(Person.prototype.constructor); // 构造函数本身

var p = new Person();
console.log(p);
// p 实例对象没有constructor 属性， 该属性来源于原型上
console.log(p.constructor == Person.prototype.constructor); // true
```



### 构造函数、实例、原型三者之间的关系

构造函数：构造函数就是一个函数，配合 new 可以新建对象。

实例：通过构造函数实例化出来的对象我们把它叫做构造函数的实例。一个构造函数可以有很多实例。

原型：每一个构造函数都有一个属性`prototype`，函数的prototype属性值就是原型。通过构造函数创建出来的实例能够直接使用原型上的属性和方法。



![sanjiao](images\sanjiao.png)



原型三角关系：

* 构造函数和原型 关系 ：  配偶关系
  * 构造函数（妈妈），通过 prototype 属性访问原型 （爸爸）
  * 原型通过 constructor 属性访问到 构造函数

* 构造函数 和 实例对象：  母子关系
  * 构造函数可以创建实例对象
  * 实例对象不能直接访问到构造函数      

* 原型和 实例对象关系 : 父子关系
  * 实例对象可以直接访问到原型上的所有成员
  * 实例对象可以间接的访问到构造函数(通过原型上的constructor 属性)



## 原型链

### 原型链概念

任何一个对象，都有原型对象，原型对象本身又是一个对象，所以原型对象也有自己的原型对象，这样形成的链式结构，就是原型链。





绘制对象的原型链结构：

```javascript
var p = new Person();
// p ==> Person.prototype  ==> Object.prototype ==> null;
var o = new Object();
// o ==> Object.prototype ==> null;
var arr = new Array();
// arr ==> Array.prototype ==> Object.prototype ==> null;
var date = new Date();
// date ==> Date.prototype ==> Object.prototype ==> null;

// Math 是个内置对象，不是个构造函数
// Math ==> Object.prototype ==> null;
```

总结：Object.prototype是原型链的尽头，Object.prototype的原型是null。

![](images/proto.png)



### 属性查找原则

**属性搜索（查找）原则： 沿着原型链进行查找**

1. 首先在当前对象上查找是否有该属性，如果有，直接返回属性值
2. 如果没有，去对象的原型上查找，如果有，直接返回属性值
3. 如果也没有， 沿着原型链进行查找，直到 Object.prototype ，如果找到了，就返回属性值，如果还没有，返回 undefined

**属性修改（设置）原则：**

1. 只会修改对象自身的属性
2. 如果自身没有这个属性，那么就会添加这个属性，并不会修改原型中的属性

```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.name = "zs";
Object.prototype.gender = "male";

var p = new Person("ls", 19);
var p1 = new Person(); 
console.log(p);

// p 的原型链：
//  p ==> Person.prototype ==> Object.prototype ==> null;

console.log(p.name); // ls
console.log(p.age);  // 19
console.log(p.gender); // male
console.log(p.sex);   // undefined

console.log(p1.name); // undefined
console.log(p1.age);  // undefined
// p1 对象依旧有 name 和age 属性， 只不过属性值都是 undefined
console.log(p1.gender); // male
console.log(p1.sex);   // undefined

p.gender = "不详";
console.log(p);
// console.log(p.gender); // 不详

p.name = "ww";
console.log(p);
// console.log(p.name); // ww
```



### Object.prototype 成员介绍

> 任何对象的原型链上都有 Object.prototype, 根据属性搜索原则(沿着原型链进行查找)， 任何对象都可以访问到 Object.prototype 上的成员。

constructor : 指向了构造函数 Object

#### `hasOwnProperty`

`hasOwnProperty()` 方法会返回一个布尔值，判断对象自身是否具有该属性

```javascript
var obj = {
  name:"zs"
}
//判断name属性是不是obj自己提供的
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false
```



**`hasOwnProperty` 与 `in` 的区别**

1. `in` 操作符：判断对象能否访问到该属性（不管这个属性是自己提供的，还是从原型上继承来的），如果可以访问到， 都会返回 true

2. `hasOwnProperty` : 该属性必须是自己提供，才返回 true，否则返回 false。



**hasOwnProperty 的使用场景**：用在for...in 循环中

```javascript
for(var k in p){
    // 可以遍历到对象自身的属性以及对象原型链上的属性
    console.log(k);

    // 只遍历得到对象自身的属性，if 条件过滤下
    // if(p.hasOwnProperty(k)){
    // 		console.log(k);
    // }
}
```



#### `isPrototypeOf`

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上

```javascript
// 判断A对象是否在B对象的原型链上。
// 返回值：true，在原型链上    false：不在原型链上。
A.isPrototetypeOf(B);

function Person(){
}
var p = new Person();

// p 的原型链： 
// p ==> Person.prototype ==> Object.prototype ==> null;

console.log(Person.isPrototypeOf(p)); // false Person是构造函数
console.log(Person.prototype.isPrototypeOf(p)); // true 
console.log(Object.prototype.isPrototypeOf(p)); // true
```



**`isPropertyOf` 与 `instanceof`运算符的区别**

`instanceof` 运算符用来测试一个对象的原型链中是否存在一个构造函数的 `prototype` 属性。作用和isPrototypeOf类似

语法： 实例对象 instanceof 构造函数

作用：构造函数的 prototype 属性是否在实例对象的原型链上

- A.isPrototypeOf(B)  判断A是否在B的原型链上                          A： 是一个原型对象
- B instanceof A         判断A的prototype是否在B的原型链上     A：是一个构造函数



```javascript
console.log(Array.isPrototypeOf([])); // false
console.log(Array.prototype.isPrototypeOf([])); // true

console.log([] instanceof Array); // true
console.log([] instanceof Array.prototype); // 语法错误，instanceof 的右边是个构造函数
```



#### `propertyIsEnumerable`

`propertyIsEnumerable()` 方法返回一个布尔值，表明指定的属性名是否是当前对象可枚举的自身属性。

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.age = 19;
var p = new Person("lw");
console.log(p.propertyIsEnumerable("name")); // true
console.log(p.propertyIsEnumerable("age")); // false
```



拓展：给对象添加不可遍历的属性 : `Object.defineProperty()`

```javascript
// 语法： Object.defineProperty(obj, prop, desc);
// 参数：
// 	obj： 给哪个对象添加属性
// 	prop：属性， 类型是字符串
// 	desc： 属性描述符， 类型是个对象

// 作用： 定义对象的属性特征

var obj = {
    name: "zs",
    age: 19
}
// 给obj 添加一个不可遍历的 gender 属性
Object.defineProperty(obj, "gender", {
    value: "female", // 配置该属性的默认值
    writable: true, // 配置该属性是否可以被修改， 默认值是false， 不可修改
    enumerable: true // 配置该属性是否可遍历， 默认值是false， 不可遍历
});
obj.gender = "male";
console.log(obj);
console.log(obj.propertyIsEnumerable("gender")); // false
```





#### toString/toLocaleString

返回对象的字符串格式

> 每个内置对象的原型上都有属于自己的toString 方法

```javascript
var obj = {
    name: "zs",
    age: 19
}
// obj ==> Object.prototype ==> null;
console.log(obj.toString()); // "[object Object]"
console.log(obj.toLocaleString()); // "[object Object]"

var arr = [1,2,3];
// arr ==>  Array.prototype ==> Object.prototype ==> null;
//           toString()            toString()
console.log(Array.prototype); // 含有自己的 toString 方法
console.log(arr.toString());  // "1,2,3"
console.log(arr.toLocaleString());  // "1,2,3"

var date = new Date();
//  date ==> Date.prototype ==> Object.prototype ==> null;
//           toString()               toString()
console.log(Date.prototype); // 含有自己的 toString 方法
console.log(date.toString()); // Wed Oct 10 2018 16:00:51 GMT+0800 (中国标准时间)
console.log(date.toLocaleString()); // 2018/10/10 下午4:00:51 得到的是本地时间格式
```



#### valueOf

语法： 对象.valueOf()

作用： 返回对象的原始值（简单数据类型），默认的 valueOf 方法（Object.prototype 上的valueOf 方法）只会返回对象自身；日期对象的 valueOf 方法返回的是时间戳，因为 Date 的原型链上有自己的 valueOf 方法，该valueOf 的作用就是返回日期的时间戳

```javascript
var obj = {
    name: "zs",
    age: 19
}
// obj ==> Object.prototype ==> null;
console.log(obj.valueOf()); // obj

var arr = [1,2,3];
// arr ==>  Array.prototype ==> Object.prototype ==> null;
console.log(arr.valueOf()); // arr

var date = new Date();
// date 原型链
// date ==> Date.prototype ==> Object.prototype ==> null;
console.log(Date.prototype); // 含有 valueOf 方法
console.log(date.valueOf()); // 时间戳

```



#### valueOf 和 toString 的应用

当对象在参与运算和比较的时候，js内部会自动的调用 valueOf 和 toString 方法

 调用规则：

1. 默认先调用 vauleOf， 尝试将对象转成简单数据类型， 如果没有转成简单数据类型， 会继续在调用 toString 方法

2. 如果 valueOf 和 toString 方法都没有转成简单数据类型，会报错