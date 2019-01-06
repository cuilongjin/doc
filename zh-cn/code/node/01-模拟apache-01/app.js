// 需求: 简单模仿apache服务器,浏览器发送127.0.0.1:8888/index.html
// 对应的返回www文件夹下面的index.html的内容
const fs = require('fs')
const http = require('http')
const path = require('path')

// 创建服务器
let server = http.createServer()
// 监听请求
server.on('request', (req, res) => {
  // 根据不同请求输出不同响应数据
  if (req.url === '/' || req.url === '/i') {
    // 读取www下面的index.html
    let filename = path.join(__dirname, 'www', 'index.html')
    fs.readFile( filename, 'utf-8', (err, data)=>{
      if (err) return console.log('文件读取失败')
      // 服务器响应文件
      res.statusCode = 200
      res.statusMessage = 'ok'
      res.setHeader('content-type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (req.url === '/l') {
    // 读取list.html
    let filename = path.join(__dirname, 'www', 'list.html')
    fs.readFile( filename, 'utf-8', (err, data) => {
      if (err) return console.log('文件读取失败')
      // 服务器响应文件
      res.writeHead(200, 'OOOOOOK', {
        'content-type': 'text/html;charset=utf-8'
      })
      res.end(data)
    })
  } else {
    // 返回浏览器, 未找到资源
    res.writeHead(404, 'NOT FOUND', {
      'content-type': 'text/html;charset=utf-8'
    })
    res.end('404 ,资源未找到')
  }
})
// 开启服务器
server.listen(8888, ()=>{
  console.log('服务器开启了')
})

