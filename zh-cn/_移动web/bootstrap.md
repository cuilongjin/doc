# bootstrap 框架

Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷

[bootstrap 中文网](http://www.bootcss.com/)

特点：

- 组件简洁大方、代码规范精简、界面自定义性强
- Bootstrap 是基于 HTML5 和 CSS3 开发的，它在 jQuery 的基础上进行了更为个性化和人性化的完善，形成一套自己独有的网站风格，并兼容大部分 jQuery 插件
- Bootstrap 中包含了丰富的 Web 组件，根据这些组件，可以快速的搭建一个漂亮、功能完备的网站

优点：

- 有自己的生态圈，不断的更新迭代
- 提供了一套简洁、直观、强悍的组件
- 标准化的 HTML+CSS 编码规范
- 让开发更简单，提高了开发效率
- 扩展性强，虽然界面组件样式已经定义好了，我们还可以自定义，修改默认样式

版本：

- 2.x.x 停止维护
  - 优点：兼容性好 IE678
  - 缺点：代码不够简洁、功能不够完善
- 3.x.x **目前使用最多（H5C3 很多东西）**
  - 优点：稳定，偏向于开发响应式布局，移动设备优先的 WEB 项目
  - 缺点：放弃了 IE67，对 IE8 支持但是界面效果不友好
- 4.x.x 测试阶段

## 基本模板

!> 但凡看到 `role属性` `aria-*的属性` `class='sr-only'的标签` 都可以直接删除，因为是给屏幕阅读器用的

```html
<head>
  <meta charset="utf-8" />
  <title>bootstrap基本模板</title>
  <!-- 引入 bootstrap 的核心样式文件 -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

  <!-- html5shiv 是用来解决 IE8 以下浏览器不支持 HTML5 语义化标签的问题 -->
  <!-- respond 是用来解决 IE8 以下浏览器不支持媒体查询的问题，注意：respond 不支持 file 协议打开 -->
  <!-- 条件注释：IE浏览器专属 -->
  <!--[if lt IE 9]>
    <script src="html5shiv.min.js"></script>
    <script src="respond.min.js"></script>
  <![endif]-->
</head>
<body>
  <h1>你好，世界！</h1>
  <!-- bootstrap 依赖于 jquery，因此需要在 bootstrap 之前引入jquery文件 -->
  <script src="lib/jquery/jquery-1.12.4.js"></script>
  <!-- 引入 bootstrap 的核心js文件 -->
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
</body>
```

## 全局样式

### normalize.css

Normalize.css 是一种 CSS reset 的替代方案。经过@necolas 和@jon_neal 花了几百个小时来努力研究不同浏览器的默认样式的差异，这个项目终于变成了现在这样

[官网](http://necolas.github.io/normalize.css/) [github 网址](https://github.com/necolas/normalize.css)

normalize 的特点：

- **保护有用的浏览器默认样式**而不是完全去掉它们
- **一般化的样式**：为大部分 HTML 元素提供
- **修复浏览器自身的 bug**并保证各浏览器的一致性
- **优化 CSS 可用性**：用一些小技巧

`Normalize.css` 支持包括手机浏览器在内的超多浏览器，同时对 HTML5 元素、排版、列表、嵌入的内容、表单和表格都进行了一般化。尽管这个项目基于一般化的原则，但我们还是在合适的地方使用了更实用的默认值。

[Normalize.css 与 CSS reset 区别](http://www.cnblogs.com/webpush/p/4974063.html)

### container 容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。默认带了 15px 的 padding 值

`.container` 类用于固定宽度并支持响应式布局的容器

```html
<div class="container">
  ...
</div>
```

`.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器

```html
<div class="container-fluid">
  ...
</div>
```

这两种容器类不能互相嵌套

### 栅格系统

栅格系统，也叫网格系统，bootstrap 栅格系统把一个盒子分成 12 格

- col-xx-yy

  xx: lg 大屏才生效 md 中屏以及以上生效 sm 小屏以及以上生效 xs 超小屏以及以上生效

  yy: 取值范围为 1 - 12 表示占几格

- col-xx-offset-yy

  xx ： lg md sm xs

  yy: 取值范围为 1 - 12 表示往右偏移几格

  列偏移：实际上是给当前元素增加了左侧的边距（margin）

- 多余列（column）的元素将作为一个整体单元被另起一行排列

- `.row`用于抵消 `.container`容器的 15px 的 padding 值，实际上是给元素添加了 margin: -15px

- 可以在`.row`中嵌套`column`

栅格系统常用类（总共 12 列）

| 类名       | 例子      | 解释                     |
| ---------- | --------- | ------------------------ |
| .col-xs-xx | .col-xs-6 | 在超小屏幕（及以上）生效 |
| .col-sm-xx | .col-sm-6 | 在小屏幕（及以上）生效   |
| .col-md-xx | .col-md-6 | 在中屏幕（及以上）生效   |
| .col-lg-xx | .col-lg-3 | 在大屏幕及生效，占 1/4   |
| .col-lg-xx | .col-lg-4 | 在大屏幕及生效，占 1/3   |
| .col-lg-xx | .col-lg-5 | 在大屏幕及生效，占 1/2   |

【案例：响应式栅格系统】

```html
<!--
需求：
  1. 在大屏时显示6个等分的列
  2. 在中屏时显示4个等分的列
  3. 在小屏时显示3个等分的列
  4. 在超小屏时显示1列（默认占一列，col-xs-12 可以省略不写）
-->
```

【案例：列嵌套.html】

```html
<div class="col-lg-4">
  <!--栅格系统无处不在，只要父盒子有宽度，就可以使用栅格系统-->
  <div class="row">
    <div class="col-lg-6"></div>
    <div class="col-lg-6"></div>
  </div>
</div>
```

【案例：列偏移.html】

```html
<!-- 使用 .col-md-offset-* 类可以将列向右侧偏移。-->
<div class="row">
  <div class="col-lg-3"></div>
  <!--col-lg-offset-3:在大屏下，这个div将向右侧偏移3个单位-->
  <div class="col-lg-6 col-lg-offset-3"></div>
</div>
```

### 排版

标题：h1 到 h6 标签、`.h1` 到 `.h6` 类、 `<small>` 标签或 `.small` 类用来标记副标题

文本：`<mark>`标记、`<del>`删除、`<s>`无用文本、`<ins>`插入文本、`<u>`下划线文本、 `.small` 类或`<small>` 小号文本、`<strong>`着重

对齐：`text-left`、`text-center`、`text-right`、`text-justify`、`text-nowrap`

### 按钮

`<a>`、`<button>` 或 `<input>`

预定义样式：btn、btn-default、btn-primary(蓝)、btn-success(绿)、btn-info(浅蓝)、btn-warning(橙)、btn-danger(红)、btn-link(链接)

尺寸：btn-lg(大)、(默认)、btn-sm(小)、btn-xs(超小)
btn-block (块元素 100%宽度)

激活状态：active

禁用状态：button 元素 添加 `disabled` 属性、链接`<a>`元素添加 `.disabled` 类（建议通过 JavaScript 代码来禁止链接的原始功能）

### 图片

响应式图片：`img-responsive`

实质是为图片设置了 max-width: 100%;、 height: auto; 和 display: block; 属性

图片形状：`img-rounded`、`img-circle`、`img-thumbnail`

### 辅助类

文本颜色：`text-muted`、`text-muted`、`text-primary`、`text-success`、`text-info`、`text-warning`、`text-danger`

背景颜色：`bg-primary`、`bg-success`、`bg-info`、`bg-warning`、`bg-danger`

关闭按钮：`<button type="button" class="close"><span>&times;</span></button>`

三角符号：`<span class="caret"></span>`

快速浮动：`pull-left`、`pull-right`

让内容块居中：`<div class="center-block">...</div>`

清除浮动：`clearfix`

显示隐藏内容：`show`、`hidden`、`invisible`

### 响应式工具

```
	         超小屏 小屏幕 中等屏幕 大屏幕桌面
.visible-xs-*	可见	隐藏	隐藏	隐藏
.visible-sm-*	隐藏	可见	隐藏	隐藏
.visible-md-*	隐藏	隐藏	可见	隐藏
.visible-lg-*	隐藏	隐藏	隐藏	可见

.hidden-xs	隐藏	可见	可见	可见
.hidden-sm	可见	隐藏	可见	可见
.hidden-md	可见	可见	隐藏	可见
.hidden-lg  可见	可见	可见	隐藏
```

`*` -> block inline inline-block

推荐使用 hidden 相关的属性

# 离线文档

`/zh-cn/参考手册/bootstrap/bootstrap3.3.7中文离线文档/index.htm`
