// 由于当前模块,依赖于其他模块,所以第一个参数是依赖项也是个数组
define(['require01'], function (obj) {
  function show(x, y) {
    var result = obj.add(x, y);
    console.log(result);
  }
  return {
    show: show,
  };
});
