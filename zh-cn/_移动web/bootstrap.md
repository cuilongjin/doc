# bootstrap 框架

> Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷

[bootstrap中文网](http://www.bootcss.com/)

特点：

- 组件简洁大方、代码规范精简、界面自定义性强。
- Bootstrap 是基于 HTML5 和 CSS3 开发的，它在 jQuery 的基础上进行了更为个性化和人性化的完善，形成一套自己独有的网站风格，并兼容大部分 jQuery 插件。
- Bootstrap 中包含了丰富的 Web 组件，根据这些组件，可以快速的搭建一个漂亮、功能完备的网站。



优点：

- 有自己的生态圈，不断的更新迭代
- 提供了一套简洁、直观、强悍的组件
- 标准化的 HTML+CSS 编码规范
- 让开发更简单，提高了开发效率。
- 扩展性强，虽然界面组件样式已经定义好了，我们还可以自定义，修改默认样式。

版本：

- 2.x.x 停止维护
  - 优点：兼容性好 IE678
  - 缺点：代码不够简洁、功能不够完善
- 3.x.x **目前使用最多（H5C3很多东西）**
  - 优点：稳定，偏向于开发响应式布局，移动设备优先的WEB项目
  - 缺点：放弃了IE67，对IE8支持但是界面效果不友好
- 4.x.x 测试阶段



## 基本模板

> 但凡看到 `role属性`  `aria-*的属性`  `class='sr-only'的标签` 都可以直接删除，因为是给屏幕阅读器用的



```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>bootstrap基本模板</title>
        <!--引入bootstrap的核心样式文件-->
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- html5shiv是用来解决IE8以下浏览器不支持HTML5语义化标签的问题 -->
        <!--respond是用来解决IE8以下浏览器不支持媒体查询的问题，注意：respond不支持file协议打开-->
        <!--条件注释：IE浏览器专属-->
        <!--[if lt IE 9]>
<script src="lib/html5shiv/html5shiv.min.js"></script>
<script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
    </head>
    <body>
        <h1>你好，世界！</h1>
        <!--bootstrap依赖与jquery，因此需要在bootstrap之前引入jquery文件-->
        <script src="lib/jquery/jquery-1.12.4.js"></script>
        <!--引入bootstrap的核心js文件-->
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
```



## 全局样式

### normalize.css 

> Normalize.css 是一种 CSS reset 的替代方案。经过@necolas和@jon_neal花了几百个小时来努力研究不同浏览器的默认样式的差异，这个项目终于变成了现在这样。

[官网](http://necolas.github.io/normalize.css/)

[github网址](https://github.com/necolas/normalize.css)

normalize 的特点：

- **保护有用的浏览器默认样式**而不是完全去掉它们
- **一般化的样式**：为大部分HTML元素提供
- **修复浏览器自身的bug**并保证各浏览器的一致性
- **优化CSS可用性**：用一些小技巧

`Normalize.css`支持包括手机浏览器在内的超多浏览器，同时对HTML5元素、排版、列表、嵌入的内容、表单和表格都进行了一般化。尽管这个项目基于一般化的原则，但我们还是在合适的地方使用了更实用的默认值。

[Normalize.css与CSS reset区别](http://www.cnblogs.com/webpush/p/4974063.html)



### container 容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。默认带了15px的padding值。

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

这两种容器类不能互相嵌套。



### 栅格系统

栅格系统，也叫网格系统，bootstrap 栅格系统把一个盒子分成12格

* col-xx-yy 

  xx: lg 大屏才生效  md 中屏以及以上生效  sm 小屏以及以上生效  xs 超小屏以及以上生效

  yy: 取值范围为 1 - 12 表示占几格

* col-xx-offset-yy 

  xx ： lg  md   sm   xs

  yy:  取值范围为 1 - 12 表示往右偏移几格

  列偏移：实际上是给当前元素增加了左侧的边距（margin）

* 多余列（column）的元素将作为一个整体单元被另起一行排列

* `.row`用于抵消 `.container`容器的15px的padding值，实际上是给元素添加了margin: -15px

* 可以在`.row`中嵌套`column`

栅格系统常用类（总共12列）

| 类名       | 例子      | 解释                     |
| ---------- | --------- | ------------------------ |
| .col-xs-xx | .col-xs-6 | 在超小屏幕（及以上）生效 |
| .col-sm-xx | .col-sm-6 | 在小屏幕（及以上）生效   |
| .col-md-xx | .col-md-6 | 在中屏幕（及以上）生效   |
| .col-lg-xx | .col-lg-3 | 在大屏幕及生效，占1/4    |
| .col-lg-xx | .col-lg-4 | 在大屏幕及生效，占1/3    |
| .col-lg-xx | .col-lg-5 | 在大屏幕及生效，占1/2    |

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



### 按钮

` <a>`、`<button>` 或 `<input>`

```html
btn
btn-default btn-primary(蓝) btn-success(绿) btn-info(浅蓝) btn-warning(橙) btn-danger(红) btn-link(链接)
btn-lg(大) (默认) btn-sm(小) btn-xs(超小)
btn-block (块元素 100%宽度)
active (激活)

```

### 禁用状态

button 元素 添加 `disabled` 属性

链接`<a>`元素添加 `.disabled` 类



### 文本颜色

```
text-muted
text-primary
text-success
text-info
text-warning
text-danger
```

### 背景颜色

```
bg-primary
bg-success
bg-info
bg-warning
bg-danger
```

### 快速浮动

```
pull-left
pull-right
```

### 让内容块居中

```html
<div class="center-block">...</div>
```

### 清除浮动

添加 `.clearfix`

### 响应式工具

显示隐藏

```
show
hidden
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

**推荐使用hidden相关的属性**



# 离线文档

`/zh-cn/参考手册/bootstrap/bootstrap3.3.7中文离线文档/index.htm`

