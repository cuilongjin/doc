# 前端自动化环境

实现一些简单的功能：

```
1. 版本控制
2. 编译SASS
3. 检查JS
4. 图片合并
5. 压缩CSS
6. 压缩JS
...
```

这些都是每个Web项目在构建、开发阶段需要做的事情。前端自动化构建环境可以把这些重复工作一次配置，多次重复执行，极大的提高开发效率。

构建工具： Gulp、Grunt、Webpack、...

## gulp 环境

Gulp是基于 Node.js的，需要要安装 Node.js

### 安装 # 4.0版本

```bash
# 检查 node 环境
$ node -v

# 全局安装 gulp
$ npm install -g gulp
$ gulp -v  #4.0

# 切换到你的在项目根文件夹下，运行
$ npm install gulp --save-dev

# 安装 gulp 功能插件依赖包
$ npm install gulp-less gulp-sass gulp-concat gulp-connect gulp-rename --save-dev
```



### 配置

新建 `gulpfile.js` 配置文件放在项目根目录下

```javascript
// gulp3.x配置不能直接在4.0上使用
// gulp4.0配置内容

// 引入gulp
var gulp = require('gulp')
// 引入组件
var less = require('gulp-less')
var sass = require('gulp-sass')
var connect = require('gulp-connect')

// 启动 serve
function serve () {
  connect.server({
    root: './',
    livereload: true
  })
}

// 编译 less
function compileLess () {
  return gulp.src('./less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./css'))
}

// 编译 sass
function compileSass () {
  return gulp.src('./sass/*.sass')
      .pipe(sass.sync({outputStyle: 'compact'}))
      // nested（嵌套） 默认
      // expanded 更像是手写的样式
      // compact 每条 CSS 规则只占一行
      // compressed 删除所有无意义的空格、空白行、以及注释
      .pipe(gulp.dest('./css'))
}

// html 刷新
function refreshHtml () {
  return gulp.src('./*.html')
      // .pipe(gulp.dest('./'))
      .pipe(connect.reload())
}

// 监听 html css js less sass 文件变化
function watch () {
  gulp.watch(['./less/*.less'], compileLess)
  gulp.watch(['./sass/*.sass'], compileSass)
  gulp.watch(['./*.html', './css/*.css', './js/*.js'], refreshHtml)
}

// 默认任务,执行 gulp 会自动执行的任务
gulp.task('default', gulp.parallel(serve, watch))
```

### 运行gulp任务

```bash
# 执行定义的default任务
# $ gulp default
$ gulp

# 单独运行sass任务
$ gulp sass
```



### 插件

```
其他 gulp 插件参考
gulp-imagemin: 		压缩图片
gulp-minify-css: 	压缩css
gulp-uglify:      	压缩js
gulp-concat:    	合并文件
gulp-rename:  		重命名文件
gulp-htmlmin: 		压缩html
gulp-clean:      	清空文件夹
```



在gulp 3.x 版本中报错会暂停监听需重新开启任务，4.0 修复了此问题

https://www.tuicool.com/articles/nAzqiaN