# CSS3 简介

>  如同人类的的进化一样，CSS3是CSS2的“进化”版本，在CSS2基础上，**增强** 或 **新增** 了许多特性， 弥补了CSS2的众多不足之处，使得Web开发变得更为高效和便捷。

## CSS3 的现状

- PC端浏览器支持程度差，需要添加私有前缀
- 移动端支持优于PC端
- 不断改进中
- 应用相对广泛

关于私有前缀：

> 在标准还未确定时，部分浏览器已经根据最初草案实现了部分功能，为了与之后确定下来的标准进行兼容，所以每种浏览器使用了自己的私有前缀与标准进行区分，当标准确立后，各大浏览器将逐步支持不带前缀的css3新属性
>
> 目前已有很多私有前缀可以不写了，但为了兼容老版本的浏览器，可以仍沿用私有前缀和标准方法，逐渐过渡。
>
> 一般来说，CSS3主要是为移动端而生的，因此我们在移动端没必要写太多的前缀，因为移动端的ios和Android的浏览器都是webkit内核。
>
> 谷歌、苹果浏览器：`-webkit-`
> 火狐浏览器：`-moz-`
> IE浏览器：`-ms-`
> 欧朋浏览器：`-o-`
>
> 一般工作中不用去加，会通过打包工具 webpack 自动添加



# CSS3 选择器

见 4.css选择器



# CSS3 阴影



> text-shadow:文字阴影

```
语法：text-shadow：none | <shadow> [ , <shadow> ]*
	<shadow> = <length>{2,3} && <color>?
text-shadow：水平偏移 垂直偏移 羽化大小 颜色
水平偏移 垂直偏移 可以为负值，羽化大小可选且不可为负
可以设置多组阴影值，用逗号隔开
```



> box-shadow:边框阴影



```
语法：box-shadow：none | <shadow> [ , <shadow> ]*
	<shadow> = inset? && <length>{2,4} && <color>?

box-shadow：水平偏移 垂直偏移 羽化大小 阴影外延 颜色
水平偏移 垂直偏移 阴影外延 可以为负值，羽化大小 阴影外延可选，羽化大小不允许负值
可以设置多组阴影值，用逗号隔开
inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影
```



# CSS3 背景

> 在css2中已经有background属性了，用于设置盒子的背景相关的一些样式，在CSS3中新增加了几个背景相关的几个属性。

background-size

bakground-clip

background-origin



# CSS3 渐变

## 线性渐变

> linear-gradient() 指沿着某条直线朝一个方向产生的渐变效果。
>
> 渐变实际上相当与一张图片，因为需要加给background-image才会生效

```javascript
// 最简单的渐变 颜色至少两个
background-image: linear-gradient(red, green);
// 设定渐变的方向 不写默认从上到下
background-image: linear-gradient(to right, red, green);
// 也可以设定渐变的角度
background-image: linear-gradient(45deg, red, green);
// 设定渐变的范围
background-image: linear-gradient(to right, red 20%, green 80%)
// 每一个区间表示渐变颜色的范围
background-image: linear-gradient(to right, red 20%, green 20%)

```



## 径向渐变

> radial-gradient指从一个中心点开始沿着四周产生渐变效果

```CSS
/*1. 最简单的渐变*/
background-image: radial-gradient(red, green);

/*2. 指定圆的半径和圆心*/
background-image: radial-gradient(200px at center, red, green);

/*3. 指定椭圆*/
background-image: radial-gradient(200px 80px at center, red, green);

/*4. 指定范围*/
background-image: radial-gradient(200px at center, green 50%, red 50%);

```



# CSS3 盒子模型

> CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box、border-box，这样我们计算盒子大小的方式就发生了改变。

可以分成两种情况： 

- box-sizing: border-box 计算方式为content = width – border - padding 
- box-sizing: content-box 计算方式为content = width



# 过渡

## 过渡的属性

1. 如果两个状态发生改变，没有过渡，效果是瞬间变化的
2. 如果加上了过渡，那么这个过程就会有动画的效果。
3. 整个状态变化的过程是由浏览器来完成的，我们只需要关注开始状态与结束状态即可。

```css
/* transition-property：设置过渡属性 */
/* 也可以是width,height */
transition-property: all;

/* transition-duration:设置过渡时间 */
transition-duration: 1s;

/* transition-delay：设置过渡延时 */
transition-delay: 2s;

/* transition-timing-function:设置过渡的速度 */
/* linear(匀速)，ease(平滑)，ease-in，ease-out，ease-in-out， steps(10)(分步动画) */
transition-timing-function: linear;
```

> 注意：1. 过渡除了可以加到初始的状态，可以加到 hover 状态，效果不一样，如果加到 hover 状态，回来就没有过渡了；2. 过渡必须要有两个状态的变化

## 属性合写

```css
/* 属性 时间 延时 速度 */
transition: width 1s 3s linear;
```



# 2D转换

> transform: 转换，是CSS3最具颠覆性的几个特性之一，既可以用于2D转换，也可以用于3D转换。
>
> transform：2D转换，元素在平面上实现移动、旋转、缩放、斜切等操作

## scale 缩放

```css
transform: scaleX(0.5); /* 让宽度变化 */
transform: scaleY(0.5); /* 让高度变化，注意不能写多个transform，不然会覆盖。 */
transform: scale(0.5); /* 让宽度和高度同时变化 */
```

注意：

- scale 接收的值是倍数，因此没有单位

- scale 可以是一个值，如果是一个值，不是说仅仅缩放宽度，高度也会等比例的缩放

- scale 缩放时内部内容也会缩放

- 

- > 可以通过 transition-origin 设定旋转原点 （可以是数值或方位词top、left...)

## translate 平移

```javascript
transform: translateX(100px);
transform: translateY(100px);
transform: translate(100px, 100px);
transform: translate(50%, 50%);
```

注意：

- translate 的值可以是 px，也可以是百分比，如果是百分比，那么参照的是自身的宽高
- translate 移动的元素并不会影响其他盒子，类似于相对定位

## rotate 旋转

```javascript
transform: rotate(360deg); // 旋转360度
transform: rotate(-360deg); // 逆时针旋转360度
```

注意：

- 单位是deg，角度，不是px
- 正值顺时针转，负值逆时针转
- 可以通过 transition-origin 设定旋转原点

## skew 斜切(变形)

> skew 在实际开发中，是用的最少的一个属性。一般来说，x 和 y 只会倾斜其中的一个

```javascript
/* 在水平方向倾斜30deg */
transform: skewX(30deg);
/* 在垂直方向倾斜30deg */
transform: skewY(30deg);
```

【案例：扫光效果.html】

## transform-origin 转换原点

> 通过 transform-origin 可以设置转换的中心原点。

```javascript
transform-origin: center center;
transform-origin: 40px 40px;
```

## 转换合写问题

```javascript
transform:translateX(800px) scale(1.5) rotate(360deg) ;
//1. transform属性只能写一个，如果写了多个会覆盖
//2. transform属性可以连写，但是顺序对效果影响的，因为它会在第一个效果的基础上执行第二个效果，然后执行第三个效果（通常会把rotate放后面）
//3. 如果对transform进行过度效果的时候，初始状态和结束状态一一对应
```

