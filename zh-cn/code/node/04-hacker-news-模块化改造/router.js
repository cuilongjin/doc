// 封装路由
const handler = require('./handler')
module.exports = (req, res) => {
  if (req.url === '/' || req.url === '/index') {
    // 动态渲染首页
    handler.showIndex(req, res)
  } else if (req.url.startsWith('/detail')) {
    // 动态渲染 detail 页面
    handler.showDetails(req, res)
  } else if (req.url === '/submit') {
    handler.showSubmit(req, res)
  } else if (req.url.startsWith('/add') && req.method === 'GET') {
    // console.log(req.method)
    // 把通过 get 请求获取的数据,添加到data.json中,然后重定向到首页
    handler.addGet(req, res)
  } else if (req.url.startsWith('/add') && req.method === 'POST') {
    // 接收post请求上传的数据
    // 监听data事件，上传数据的过程中，data事件会不断触发
    handler.addPost(req, res)
  } else {
    // 请求css/图片等其他静态资源
    handler.showOthers(req, res)
  }
}
