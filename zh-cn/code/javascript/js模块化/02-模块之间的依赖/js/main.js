// 在 main.js 中要使用其他模块(其他js文件)中的函数
// 要先引入对应的那个模块
// require(['模块名称1', '模块名称2',...],function(模块1的形参,模块2的形参..){
//   // 当前面的模块都加载完毕了,这个回调函数会执行
//   // 使用对应模块的方法了
// })

// 文件名就是模块名
require(['require02'], function (obj) {
  // console.log(obj);
  // alert(obj.add(4, 5));
  obj.show(1, 2);
});
