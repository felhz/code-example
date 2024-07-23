// sse发送数据
const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      const file = fs.createReadStream(path.resolve(__dirname, './index.html'));
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
  })
  .listen(4000);
