// 需求:
// 创建一个服务器,实现类似于apache的功能,不仅可以返回html静态页面,也要满足返回css,图片等静态资源的功能
const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

// 创建一个服务器
let server = http.createServer()
// 监听请求
server.on('request', (req, res) => {
  // 接收请求,根据请求,返回不同的静态资源
  let filePath = path.join(__dirname, 'pages', req.url)
  // console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) return console.log('数据读取失败')

    // 读取成功了
    res.statusCode = 200
    res.statusMessage = 'OK'
    // if(req.url === 'index.html'){
    //   res.setHeader('content-type', 'text/html;charset=utf-8');
    // }else if(req.url === 'anoceanofsky.css'){
    //   res.setHeader('content-type', 'text/css;charset=utf-8');
    // }

    // 根据文件的后缀名,获取mime类型,直接返回对应的类型
    // 获取文件的mime类型
    let mimeType = mime.getType(req.url)
    res.setHeader('content-type', mimeType)
    res.end(data)
  })
})
// 开启服务器
server.listen(8888, () => {
  console.log('服务器开启了')
})

