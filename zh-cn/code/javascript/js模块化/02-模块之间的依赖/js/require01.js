// 需要按照require的标准去写代码
// 每一个模块,都需要定义一下,每一个模块都要写在一个文件中
define(function () {
  function add(x, y) {
    return x + y;
  }
  // 把要暴露出去的函数导出
  return {
    add: add,
  };
});
