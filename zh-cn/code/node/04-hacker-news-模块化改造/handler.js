// 导出展示首页，详情页的方法
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const template = require('art-template')
const url = require('url')
const qs = require('querystring')

module.exports = {
  showIndex (req, res) {
    // 动态渲染首页
    let filepath = path.join(__dirname, 'views', 'index.html')
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404
        res.end('404 data')
      } else {
        let obj = JSON.parse(data)
        let htmlStr = template(filepath, obj)
        res.statusCode = 200
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end(htmlStr)
      }
    })
  },
  showDetails (req, res) {
    // 动态渲染 detail 页面
    let filepath = path.join(__dirname, 'views', 'details.html')
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html')
        res.end('404 detail')
      } else {
        let obj = JSON.parse(data)
        let detailObj = obj.list.find((item) => {
          return item.id === +url.parse(req.url, true).query.id
        })
        // console.log(detailObj)
        let htmlStr = template(filepath, detailObj)
        res.statusCode = 200
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end(htmlStr)
      }
    })
  },
  showSubmit (req, res) {
    let filepath = path.join(__dirname, 'views', 'submit.html')
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404
        res.setHeade('content-type', 'text/html;charset=utf-8')
        res.end('404 submit')
      } else {
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end(data)
      }
    })
  },
  showOthers (req, res) {
    // 请求css/图片等其他静态资源
    let filename = path.join(__dirname, req.url)
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html')
        res.end('404 other')
      } else {
        let mimeType = mime.getType(req.url)
        res.setHeader('content-type', mimeType)
        res.end(data)
      }
    })
  },
  addGet (req, res) {
    // 把通过 get 请求获取的数据,添加到data.json中,然后重定向到首页
    let obj = url.parse(req.url, true).query
    obj.id = Date.now()
    console.log(obj)

    // 读取data.json中的数据
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html')
        res.end('404 add GET')
      } else {
        let dataObj = JSON.parse(data)
        dataObj.list.unshift(obj)
        let jsonStr = JSON.stringify(dataObj)
        fs.writeFile(path.join(__dirname, 'data', 'data.json'), jsonStr, (err) => {
          if (err) console.log('写入失败')
          res.writeHead(302, {
            'Location': '/index'
          })
          res.end()
        })
      }
    })
  },
  addPost (req, res) {
    // 接收post请求上传的数据
    // 监听data事件，上传数据的过程中，data事件会不断触发
    let result = ''
    req.on('data', (chunk) => {
      result += chunk
    })

    // 数据上传完成后，触发end事件
    req.on('end', () => {
      // 将接收到的键值对转换成对象
      let obj = qs.parse(result)
      obj.id = Date.now()
      console.log(obj)

      fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
          res.statusCode = 404
          res.setHeader('content-type', 'text/html')
          res.end('404 add post')
        } else {
          let jsonObj = JSON.parse(data)
          jsonObj.list.unshift(obj)
          fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(jsonObj), (err) => {
            if (err) console.log('写入失败')
            res.writeHead(302, {
              'Location': '/index'
            })
            res.end()
          })
        }
      })
    })
  }

}
