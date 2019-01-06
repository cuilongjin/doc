const http = require('http')
const router = require('./router')

let server = http.createServer()
server.on('request', (req, res) => {
  router(req, res)
})

server.listen(8888, (err) => {
  if (err) console.log('服务启动失败')
  console.log('服务启动成功')
})
