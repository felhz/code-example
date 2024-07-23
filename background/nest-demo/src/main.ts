import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as WebSocket from 'ws';
import * as ywsUtils from 'y-websocket/bin/utils';
import { AppModule } from './app.module';
const setupWSConnection = ywsUtils.setupWSConnection;
const docs = ywsUtils.docs;

const httpsOptions = {
  key: fs.readFileSync('./gen/private.key'),
  cert: fs.readFileSync('./gen/cert.key'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
  const wss = new WebSocket.Server({ server: app.getHttpServer() });
  app.use(cookieParser());

  wss.on('connection', (conn, req) => {
    setupWSConnection(conn, req, {
      gc: req.url.slice(1) !== 'ws/prosemirror-versions',
    });
  });

  // log some stats
  // setInterval(() => {
  //   let conns = 0;
  //   docs.forEach((doc) => {
  //     conns += doc.conns.size;
  //   });
  //   const stats = {
  //     conns,
  //     docs: docs.size,
  //   };
  //   console.log(`${new Date().toISOString()} Stats: ${JSON.stringify(stats)}`);
  // }, 10000);

  await app.listen(3000);
}
bootstrap();
