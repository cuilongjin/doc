// 在main.js中要使用其他模块(其他js文件)中的函数
// 要先引入对应的那个模块
// require(['模块名称1', '模块名称2',...],function(模块1的形参,模块2的形参..){
//   // 当前面的模块都加载完毕了,这个回调函数会执行
//   //使用对应模块的方法了
// })

// 一开始在中括号中直接写文件名,是因为main.js和其他js在同一个路径下,
// 如果不在同一个路径,那么在中括号中需要写相对于main的路径

// require.config() 可以配置路径,但是注意:要写在main中,并且写在最上面
require.config({
  // 可以批量的修改模块的路径
  baseUrl: 'outjs/js',
  // 专门用来配置路径的
  paths: {
    // 模块名称: 模块的路径
    req02: 'require02',
    req01: 'require01'
  }
})

require(['req02'], function (obj) {
  console.log(obj);
  obj.show(1, 2);
})
