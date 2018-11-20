require.config({
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.3.1.min',
    // 先配置
    demo: 'demo'
  },
  // 专门用来配置非AMD标准的文件
  shim: {
    demo: {
      // 配置我们当前demo文件依赖的模块 []
      deps: ['jquery'],
      //  对应的这个demo文件中的导出项
      exports: 'animate'
    }
  }
})

// 由于jquery是支持AMD标准的,所以在paths中配置了之后,就可以直接使用了
require(['demo'], function (demo) {
  // console.log($);
  // console.log($('.box')[0]);
  console.log(demo);
  var box = document.getElementsByClassName('box')[0];
  demo(box);
})
