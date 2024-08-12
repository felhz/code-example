"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const roomName = 'demo';
let SocketIoGateway = class SocketIoGateway {
    OnGatewayConnection(s) {
        console.log('connected', s);
    }
    handleMessage(client, payload) {
        client.join(roomName);
        const rooms = this.server.to(roomName);
        console.log(rooms);
        client.to(roomName).emit('hh', { some: 'data' });
        return 'Hello world!';
    }
};
exports.SocketIoGateway = SocketIoGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], SocketIoGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], SocketIoGateway.prototype, "handleMessage", null);
exports.SocketIoGateway = SocketIoGateway = __decorate([
    (0, common_1.Global)(),
    (0, websockets_1.WebSocketGateway)({ transports: ['websocket'], cors: '*', namespace: 'admin' })
], SocketIoGateway);
//# sourceMappingURL=socket-io.gateway.js.map