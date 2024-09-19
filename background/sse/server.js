// sse发送数据
const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    // res.setHeader(
    //   'access-control-allow-methods',
    //   'GET,POST,PUT,DELETE,OPTIONS'
    // );
    // res.setHeader('access-control-allow-headers', '*');
    // res.setHeader('access-control-allow-credentials', true);
    if (req.url === '/') {
      const file = fs.createReadStream(path.resolve(__dirname, './index.html'));
      file.pipe(res);
      return;
    }
    if (req.url.includes('.html')) {
      const fileName = req.url.split('/').pop();
      const file = fs.createReadStream(
        path.resolve(__dirname, './' + fileName)
      );
      file.pipe(res);
      return;
    }

    if (req.url === '/sse') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream', // 设置为 text/event-stream
        'Cache-Control': 'no-cache', // 禁用缓存
        Connection: 'keep-alive', // 保持长连接
      });
      let count = 1;
      const timer = setInterval(() => {
        // res.write(`id: ${count}\n`);
        // res.write(`event: message\n`);
        // 每次消息结束都要以两个换行符结尾
        res.write(`data: 1111\n\n`);
        count++;
        if (count > 3) {
          res.end('data: end\n\n');
        }
      }, 1000);
      // 监听连接关闭事件
      req.on('close', () => {
        clearInterval(timer);
        res.end();
      });
      return;
    }
    // octet 流
    if (req.url === '/octet') {
      res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
      });
      let count = 0;
      const text = `line: { "type": "delta", "delta": "## 是HTML和CSS${count}\n"\n}`;
      count++;
      res.write(text);
      setInterval(() => {
        res.write(`line: {"type":"delta","delta":"## 是HTML和CSS${count}"\n}`);
        count++;
        if (count > 10) {
          res.end();
        }
      }, 1000);
    }
  })
  .listen(4000, () => {
    console.log('server is running at http://localhost:4000');
  });
