# Vue

1. [vue 中文网](https://cn.vuejs.org/)
2. [github 下载地址](https://github.com/vuejs/vue)
3. Vue.js (读音 /vju:/ view)
4. 渐进式 JavaScript 框架

   渐进式 

   > 小型项目使用 vue 就够了
   > 随着页面的复杂程度提高，就要学习 vue-rouer 来管理更多的页面
   > 再随着项目的数据越来越多，管理数据也变得麻烦起来了，就开始使用 vuex 来管理数据

   框架 : 一整套的解决方案

## 框架和库的区别 (面试)

###1. 库(Library) ，代表 : jquery
- 库就是一系列函数的集合，我们开发人员在使用库的时候，想要完成什么样的功能，就调用库中提供的某个方法

比如：想要添加样式，就调用 jquery 中的 .css() / .addClass()

- 库起到了一个辅助的作用，在使用库的是时候，是由开发人员说了算，也是由开发人员起主导作用

###2. 框架 (Framework)，代表 : vue
- 在使用框架的时候，是由框架说了算，由框架起到了主导作用
- 框架是一套完整的解决方案，框架中制定了一套规则，使用框架的时候，只需要按照规则把代码放到合适的地方，然后框架会在合适的时机，主动调用开发人员的代码

比如 : 想用vue组件里遍历就得使用 v-for，使用 for 不行

### 3. 主要区别：控制反转

> 也就是 : 谁起到了主导作用

- 使用库的时候：开发人员起主导作用
- 使用框架的时候：框架起到了主导作用
- 从体量上看，框架一般比库大
- 会发现使用框架的时候，会受到很多限制
- [我们所说的前端框架与库的区别？](https://zhuanlan.zhihu.com/p/26078359?group_id=830801800406917120)



## MVC + MVVM (面试)

### MVC

1. MVC 是一种软件架构模式，也有人叫做设计模式
2. M : Model 数据模型 (专门用来操作数据，数据的 CRUD)
3. V : View 视图 (对于前端来说就是页面)
4. C : Controller 控制器 (是视图和数据模型沟通的桥梁，用于处理业务逻辑)

### MVVM

> Vue 使用的是 MVVM 模式

- MVVM ===> M / V / VM
- M : model 数据层
- V : view 视图层
- VM : ViewModel 视图模型
- 核心 : M <===> VM <===> V

### MVVM 优势

- MVC 模式将应用程序划为三个部分，实现职责分离
  - 但是，在前端中，经常要通过 js 代码来进行一些逻辑操作，最终还要把这些逻辑操作展示页面中，也需要`频繁的操作DOM`
  - 比如 : ajax 请求、添加、修改、设置样式、动画
- MVVM 的思想通过 `数据双向绑定` 让数据自动的双向同步
  - V (修改视图) --> M
  - M (修改数据) --> V
- 采用的是 : **数据驱动视图**的思想，**数据是核心**。不要再想着怎么操作 DOM，而是想着如何操作数据

### Vue 中的 MVVM

- 注意 : 不推荐直接手动操作 DOM
  > 每个人操作 DOM 的方法不一样，会造成性能不一样
  > 官网 : 虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例

## Vue 基本使用

1. 安装 : `npm i vue`
2. 导入 : `<script src='./vue.js'></script>`
3. 实例化 vue

```js
const vm = new Vue({
  // 指定 vue 管理的边界，不能是 body 或 html 节点
  el: '#app',
  // 提供视图中 需要的数据
  // 视图可以直接使用data中的数据
  data: {
    msg: 'xxx'
  }
})
```

### 使用注意点

1. vm 官网建议
2. Vue 构造函数首字母大写
3. 参数是一个对象
4. id='#app', 其他也可以
5. 边界外的无法使用 msg

###  {{}} 插值表达式

1. {{}}：mustache 语法，小胡子语法，插值表达式
2. 作用 : 使用`{{}}` 从`data`中获取数据，并展示在模板中
3. 说明 : `{{}}` 中只能出现 js 表达式
4. {{}} 语法不能作用在 HTML 元素的属性上



- 表达式 (有返回值的)
  - 基本的数据类型 `1 'abc' false [] {}`
  - 数据类型 和 运算符结合在一起`1+2 arr.join('-') true ? 123 : 321`
- 语句 `if语句 for语句`



## 双向数据绑定

## input + v-model

 v-model 指令：数据双向绑定的指令

* 作用：把 data 中的 num 值 和 input 上的值绑定到一起，一方的值发生了改变，另 一方 也会跟着改变
* 注意：v-model 只能用在 表单控件上（input checkbox 等）

```js

```

## Object.defineProperty()

```js
let obj = {}
let temp
// 参数1 : 要给哪个对象设置属性
// 参数2 : 给对象设置什么属性
// 参数3 : 属性的修饰符
Object.defineProperty(obj, 'name', {
  set: function(newVal) {
    console.log('赋值了', newVal)
  },
  set: function() {
    console.log('取值了')
    return temp
  }
})
```

## 数据双向绑定的原理

```html
<div id="app">
  <input id="input" type="text" v-model="num">
</div>
```

```javascript
let obj = {}
let temp
// 第一个参数 : 给哪个对象添加或者设置属性
// 第二个参数 : 要添加/设置什么属性
// 第三个参数 : 属性的修饰符 对象格式
Object.defineProperty(obj, 'name', {
  set: function (newVal) {
    // 设置属性时会触发该函数
    console.log('设置', newVal)
    temp = newVal
    input.value = newVal
  },
  get: function () {
    // 获取属性时会触发该函数
    console.log('获取')
    return temp
  }
})

input.oninput = function () {
  // console.log(this.value)
  obj.name = this.value
  console.log(obj.name)
}
```



## 指令学习

### 指令

- 指令 : 就是一个特殊的标记，起一个辅助作用，使 html 具备原来没有的功能
- vue 中所有的指令都是以 v- 开头的
- 比如 : v-model v-bind v-if v-for 等等

### v-model (常用)

> 说明 : 用在`表单`元素中，用来实现`数据双向绑定` (input checkbox 等等)
> 作用 : 将 `数据` 和 `文本框的值` 绑定到一起，任何一方发生改变，都会引起对方的改变
> 注意 : v-model 在不同类型的表单元素中作用不同

```html
<div id="app">
  <!-- 文本输入框 绑定的是值 -->
  <input type="text" v-model="num" />
  <!-- 多选框  绑定的选中状态 -->
  <input type="checkbox" v-model="isChecked" />
</div>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    num: 0,
    isChecked: true
  }
})
```



### v-text 和 v-html

> 说明 : 设置文本内容

1. v-text : 相当于之前的 innerText 标签内部{{}}
2. v-html : 相当于之前的 innerHTML

```html
<div id="app">
  <h1 v-text="msg1"></h1>
  <h1 v-html="msg2"></h1>
</div>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {
    msg1: '<a href="#">haha</a>',
    msg2: '<a href="#">haha</a>'
  }
})
```



### v-bind (常用)

> 说明 : 动态绑定数据 (单向)
> 出现原因 : 在 HTML 属性中，无法使用插值表达式

```html
<div id="app">
  <a v-bind:href="href">hahaha</a>
  <!-- v-bind可以直接省略 -->
  <a :href="href">hahaha</a>
</div>
```

```javascript
// v-bind :
// 说明 : 动态数据绑定 (单向)，因为html的`属性`不能使用{{}} 来动态的读取数据 , 需要使用 v-bind

const vm = new Vue({
  el: '#app',
  data: {
    href: 'https://www.baidu.com'
  }
})
```



#### v-bind 和 v-model 的区别

```html
<!-- v-model 数据双向绑定 -->
<!--场景 :  表单元素中 -->
<input type="checkbox" v-model="isChecked1">

<!--  v-bind 数据动态绑定 (单向) -->
<!--场景 :  主要用在属性中 -->
<input type="checkbox" :checked="isChecked2">
```



#### 操作样式

```html
<div id="app">
  <!-- 操作样式 -->
  <!-- 1. 动态添加类，但不符合vue数据是核心的思想 -->
  <h1 :class="cls">hahaha</h1>

  <!-- 2. class值是一个对象 -->
  <!-- 属性名为类名 -->
  <!-- 属性值为布尔值 -->
  <h1 :class="{red: isRed, fz: isFz}">hahaha</h1>

  <!-- 3. style -->
  <h1 :style="{backgroundColor: 'red', fontSize: fz + 'px'}">hahaha</h1>
</div>
```

```javascript
// v-bind :
// 说明 : 动态数据绑定 (单向)，因为html的`属性`不能使用{{}} 来动态的读取数据 , 需要使用 v-bind

const vm = new Vue({
  el: '#app',
  data: {
    href: 'https://www.baidu.com'
  }
})
```



其他操作

```html
<div id="app">
  <div :class="['red', 'fz']">heheheh</div>
  <!-- ===> <div class="red fz"></div> -->

  <!-- 多个样式对象写成数组的形式，如果有相同样式后面会覆盖前面 -->
  <div :class="[{red: true}, 'fz']">hehehe</div>
  <!-- ===> <div class="red fz"></div> -->
</div>
```

### v-on

> 注册事件/绑定事件

1. v-on:click 绑定了一个 click 事件

2. 缩写 : @click='fn'

3. 函数写在 `methods` 里面

```html
<div id="app">
  <button v-on:click="fn">按钮</button>
  <!-- 简写 @ -->
  <button @click="fn1">按钮</button>
  <!-- 传参 -->
  <button @click="fn2(123)">按钮</button>
</div>
```

```javascript
// v-on 注册事件
// v-on:click => 绑定点击事件

const vm = new Vue({
  el: '#app',
  data: {},
  // 事件函数写在 methods 中
  methods: {
    fn () {
      console.log('haha')
    },
    fn1 () {
      console.log('haha')
    },
    fn2 (ref) {
      console.log(ref)
    }
  }
})
```



4. 函数里面的 this 指的就是 vm 实例

```js
this === vm // true
this.msg // 获取数据  
this.msg = 'XXX' // 修改数据  
```



5. 事件对象 \$event

```html
<!-- 绑定事件对象的时候, 没有添加小括号，此时，直接在方法中，通过参数 e 就可以获取到事件对象 -->
<button @click="fn">按钮</button>

<!-- 如果绑定事件的地方,事件函数有()  @click='fn()' 则需要通过 $event 获取 -->
<button @click="fn1($event, 123)">按钮</button>
```

```javascript
const vm = new Vue({
  el: '#app',
  data: {},
  methods: {
    fn (e) {
      console.log(e)
    },
    fn1 (e, ref) {
      console.log(e)
      console.log(ref)
    }
  }
})
```



### v-for

遍历数据，为数据中的每一项生成一个指令所在的标签

```html
<!-- 1: 最常用 遍历数组 -->
<li v-for="(item, index) in list1">{{ item }} - {{ index }}</li>

<!-- 2: 遍历元素是对象的数组 -->
<li v-for="item in list2">{{ item.name }} - id:{{ item.id }}</li>

<!-- 3: 遍历对象 -->
<!-- item 是 属性值，key 是属性名 -->
<li v-for="(item, key) in obj">{{ item }}-{{key}}</li>

<!-- 4: 生成10个h1 （item是1-10）-->
<h1 v-for="item in 10">我是h1 {{ item }}</h1>
```

### v-if 和 v-show

```html
<h1 v-if='isShow'>我是h1 v-if</h1>
<h1 v-show='isShow'>我是h1 v-show</h1>
```

v-if 和 v-show 的异同点：

* 相同点: 可以切换元素的显示与隐藏

* 不同点: 切换显示和隐藏的实现不同
  * v-if：显示：创建节点；隐藏：删除节点
  * v-show：显示：display:block；隐藏： display:none

* 使用场景 :
  * v-if 因为要不断的创建和删除来切换显示与隐藏，所以性能不高
  * v-if：切换次数不频繁的时候
  * v-show：切换次数频繁的时候



## 按键修饰符

在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符

 Vue 为最常用的按键提供了别名：

```js
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">

<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

全部的按键别名：

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`



## 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。



## 系统修饰键

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

```javascript
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```



### 鼠标按钮修饰符

- `.left`
- `.right`
- `.middle`

这些修饰符会限制处理函数仅响应特定的鼠标按钮



## 计算属性

1. 写起来像一个方法，用起来像一个属性

```js
computed: {
  fn () {}
}
```

特点  : 只有跟计算属性相关的数据发生了改变，计算属性才会重新计算
注意点:  

- 计算属性必须返回一个值

- 计算属性只能当属性用，不能当方法用
- 不能和 data 中的属性名重名



## key

当 Vue.js 用 `v-for` 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 属性。它的工作方式类似于一个属性，所以你需要用 `v-bind` 来绑定动态值 

建议尽可能在使用 `v-for` 时提供 `key`，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升

* `就地复用`

```html
<!-- 显示组件 -->
<p v-for="(item, index) in list" :key="index">
  {{item.name}} <input type="text" />
</p>
<!-- 数据 -->
data: {list: [{id: 1, name: 'zs'}, {id: 2, name: 'ls'}, {id: 3, name: 'ww'}]
<!-- 演示  -->
vm.list.unshift({id:4, name:'zl'})
```

* 使用 key
  * 如果数组的元素是一个对象，使用对象里固定属性，一般情况下，对象里都有 id
  * 如果数组的元素是一个简单类型，不是一个对象，就可以取索引作为 key



## 异步 DOM 更新

1. Vue 中采用了 `异步DOM更新` 的机制
2. 数据发生改变后，vue 没有立即将数据的改变更新到视图中，而是等到数据不再变化的时候 一次性的将数据的改变更新到视图中


为什么是异步 DOM 更新?

- 性能的考虑
- 因为对于前端来说，修改数据进行 DOM 操作是常有的事情,如果频繁操作 DOM，会严重影响页面的加载性能
- DOM 操作这是前端的性能的瓶颈
- 比如 : for (let i = 1; i < 10000; i++>) 如果同步 就要重新渲染 1000 次

验证异步 DOM 更新：

```js
// 通过dom来获取count的值
// this.$el ==> vue 边界元素
console.log(this.$el.children[0].innerText) // 0
this.count = 100
console.log(this.$el.children[0].innerText) // 0
```

需求：在数据更新后，立即获取到更新后的内容

```js
this.$nextTick(() => {
  // DOM 更新后，会执行 this.$nextTick() 的回调函数，所以能拿到值
  console.log(this.$el.children[0].innerText) // 100
}) 
```



## 监听 watch

vue 中可以通过 watch 配置项来监听 vue 实例中数据的变化

* 基本使用

```javascript
data: {
  num: 0
},
//  监听
watch: {
  // 监听 num 属性的数据变化
  // 作用: 只要 num 的值发生变化，这个方法就会被调用
  // 第一个参数: 新值
  // 第二个参数: 旧值
  num (newVal, oldVal) {
    console.log('新:', newVal)
    console.log('旧:', oldVal)
  }
}
```



* 监听对象

```js
data: {
  msg: '',
  obj: {
    age: 18
  }
}

watch: {
  // 监听对象
  obj (newVal) {
    // 虽然obj中的属性值发生改变了，但obj引用的地址没有发生改变，所以不会触发事件
    console.log(newVal)
  },
  // 监听对象的属性
  // 从对象的角度来监听的
  obj: {
    // 深度监听 监听对象里面的属性
    // 一旦对象里的属性值发生变化,调用 handler 方法
    deep: true,
    handler (newVal) {
      this.msg = `obj.age 值变化了，新值：${newVal.age}`
    }
  },
  // 从属性的角度来监听
  'obj.age' (newVal) {
    this.msg = `obj.age 值变化了，新值：${newVal}`
  }
}
```



* 使用案例：需求 : 监听文本框字符个数，并显示格式验证码

```html
<input type="text" v-model="val"><span v-show='isTrue'>{{ msg }}</span>
```

```javascript
data: {
  val: '',
  msg: '请输入 6-12 位',
  isTrue: false
},
watch: {
  val (newVal) {
    if (/^[0-9a-zA-z]{6,12}$/.test(newVal)) {
      this.isTrue = false
    } else {
      this.isTrue = true
    }
  }
}
```



## 生命周期函数

- 所有的 vue 组件，都是 vue 实例，一个组件对应一个实例，并且接收相同的选项对象（一些根实例特有的选项除外）
- 实例生命周期也叫做：组件生命周期

### 生命周期介绍

[vue 生命周期钩子函数](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

- 简单说：一个组件（实例）从开始到最后消化所经历的各种状态，就是一个组件的生命周期
- 生命周期钩子函数的定义：从组件被创建，到组件挂在到页面上运行，再到页面关闭组件被销毁，这三个阶段总是伴随着组件的各种事件，这些事件，统称为组件的生命周期函数（简称 : 钩子函数）
- 开发人员可以通过 vue 提供的钩子函数，让我们写的代码参与到 vue 的声生命周期里面来，让我们的代码在合适的阶段起到相应的作用

注意：

- vue 在执行过程中会 **自动调用** `生命周期钩子函数`，我们只需要提供这些钩子函数即可
- 钩子函数的名称都是  vue 中规定好的



[vue 实例生命周期 参考 1](https://segmentfault.com/a/1190000008879966)

[vue 实例生命周期 参考 2](https://segmentfault.com/a/1190000008010666)



### 钩子函数 - beforeCreate

- 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
- 此时组件的选项还未挂载，因此无法访问 methods，data，computed 上的方法或数据
- 使用场景 : 几乎不用



### 钩子函数 - created (掌握)

- 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，`$el` 属性目前不可见
- 可以调用 methods 中的方法、改变 data 中的数据，并且修改可以通过 vue 的响应式绑定体现在页面上、获取computed 中的计算属性等
- 使用场景：发送 ajax、本地存储获取数据



### 钩子函数 - beforeMounted()

- 在挂载开始之前被调用（挂载：DOM 渲染）



### 钩子函数 - mounted() (掌握)

- `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 `mounted` 被调用时 `vm.$el` 也在文档内。
- 这个周期可以获取 DOM
- 指令的生效在 mounted 周期之前
- 在这个周期内，对 data 的改变可以生效。但是要进下一轮的 DOM 更新，DOM 上的数据才会更新
- 使用场景：发送 ajax、操作 DOM



### 钩子函数 - beforeUpdated()

- 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程

- 此处获取的数据是更新后的数据，但是获取页面中的 DOM 元素是更新之前的

  > 小提示 : 打印 this.\$el ，打开小三角是之后的，是因为打印是有监听的功能，展示的是后面更改之后的



### 钩子函数 - updated()

- 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- 组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
- 应该避免在此期间更改状态。如果要相应状态改变，通常最好使用 **计算属性** 或 **watcher** 取而代之



### 钩子函数 - beforeDestroy()

- 实例销毁之前调用。在这一步，实例仍然完全可用。
- 使用场景：实例销毁之前，执行清理任务，比如：清除定时器等

```js
created () {
  this.timerId = setInterval(() => {
    console.log(1111)
  }, 500)
},

 // 如果当组件销毁了,还不清除定时器会出现性能问题
 // 在浏览器中可以尝试销毁 vm.$destroy()
 // 最后销毁
beforeDestroy () {
  clearInterval(this.timerId)
}
```



### 钩子函数 - destroyed()

- Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。



## TODOMVC 案例

### 准备工作

1. [Vue-TodoMVC](http://todomvc.com/examples/vue/)
2. [下载模板地址](https://github.com/tastejs/todomvc-app-template) `git clone https://github.com/tastejs/todomvc-app-template.git`
3. 安装依赖包 : `npm i`
4. 安装 vue : `npm i vue`

### 列表渲染

- 渲染任务列表：`<label>{{ item.name }}</label>`
- 任务完成 : `:class="{ completed : item.done }"`
- 多选框选中状态 : `v-model='item.done'`

### 添加任务

- 获取文本输入框的内容 (关键点)
  - 把 input 通过 v-model 双向数据绑定 == todoName
  - @keyup.enter 触发事件 addTodo => 拿到 todoName 的值
  - 判断文本框不能为空
  - 按回车添加任务
- 对象{done: false, id: , name : todoName}
  - 获取数组里最后一个元素的 id+1
  - 如果数组之前一个元素都没有 , id = 1
- 将对象添加进数组
- 添加完，清除文本框内容



### 删除任务

- 传索引
  `this.todoList.splice(index, 1)`
- 传 id

```js
// 根据 id  找到对应的元素索引
const index = this.todoList.findIndex(item => item.id === id)
// 根据索引删除
this.todoList.splice(index, 1)
```

- 传 id 过滤

```js
// 传过来一个 id, 过滤出来不等于这个 id 的元素，重新赋值给 todoList
this.todoList = this.todoList.filter(item => item.id !== id)
```

### 编辑任务

- 显示`编辑框` ( editing : true) (难点)
  - 在 data 中添加一个 editId : -1
  - 在 :class
    editing: item.id === editId
  - 双击 : 接收过来双击元素的id
    this.editId = id
  - 关键点 :
    vue 中 data 中的数据一旦发生改变，当前页面的指令和表达式都会重新计算

- 读取内容
  `<input class="edit" v-model="item.name">`

- 回车隐藏编辑框



### 底部的显示与隐藏

* v-if/v-show

```js
// 组件部分
<footer class="footer" v-show="isFooter()">
// js
  isFooter() {
    return this.todoList.length > 0
  }
```

* 因为 vue 中 data 的数据发送了改变，当前页面中的指令和表达式都会重新计算，所以只要文本框里的内容发生改变，todoName 也会发送改变，isFooter 会一直被调用，性能不好。我们需要的是数组列表的个数改变才会影响底部的变化，所以需要用到计算属性

* 计算属性

```html
<footer class="footer" v-show="isFooter"></footer>
```

```js
computed: {
  // 计算属性 判断底部是否显示
  // 1. 计算属性只会跟着相关属性的值发生变化而变化
  // 2. 一定要有返回值
  // 3. 一定要写在 computed 里面
  // 4. 写起来像一个方法，用起来像一个属性
  isFooter () {
    return this.todoList.length > 0
  }
}
```



### 数据持久化

- 存储数据
  - 监听 list 数据的改变，只要 list 数据变了，就调用保存数据的方法
  - 使用 vue 的 watch 监听 list 的数据改变
  - 保存值，记得把对象转化为字符串(存的快省空间)

```js
watch: {
  // 监听 todoList
  todoList: {
    deep: true,
    handler (newVal) {
   		localStorage.setItem('todoList', JSON.stringify(newVal))
  	}
  }
}
```



- 获取数据

```js
// 在 data 中可以初始值
// 设置一个默认值 空数组 []
todoList: JSON.parse(localStorage.getItem('todoList')) || []
```



### 使用钩子函数来完善数据存储

```js
created () {
  this.todoList = JSON.parse(localStorage.getItem('todoList')) || []
}
```