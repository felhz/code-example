"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const WebSocket = require("ws");
const ywsUtils = require("y-websocket/bin/utils");
const app_module_1 = require("./app.module");
const setupWSConnection = ywsUtils.setupWSConnection;
const docs = ywsUtils.docs;
const httpsOptions = {
    key: fs.readFileSync('./gen/private.key'),
    cert: fs.readFileSync('./gen/cert.key'),
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true, httpsOptions });
    const wss = new WebSocket.Server({ server: app.getHttpServer() });
    app.use(cookieParser());
    wss.on('connection', (conn, req) => {
        setupWSConnection(conn, req, {
            gc: req.url.slice(1) !== 'ws/prosemirror-versions',
        });
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map