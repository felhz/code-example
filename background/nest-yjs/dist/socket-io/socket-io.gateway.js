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
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const Y = require("yjs");
const avatars = new Map();
let SocketIoGateway = class SocketIoGateway {
    constructor() {
        this.docs = new Map();
    }
    async handleMessage(client, data) {
        console.log(data);
        avatars.set(client.id, { ...data });
        const doc = new Y.Doc();
        if (!this.docs.has(data.room)) {
            this.docs.set(data.room, doc);
        }
        client.join(data.room);
        const clinets = await this.server.to(data.room).fetchSockets();
        this.server.to(data.room).emit('updateuser', {
            clients: clinets.map((c) => {
                return {
                    id: c.id,
                    ...avatars.get(c.id),
                };
            }),
        });
        return {
            room: data.room,
            doc: this.docs.get(data.room) &&
                Y.encodeStateAsUpdate(this.docs.get(data.room)),
            clients: clinets.map((c) => {
                return {
                    id: c.id,
                    ...avatars.get(c.id),
                };
            }),
        };
    }
    update(client, data) {
        console.log(client.broadcast);
        client.broadcast.to(data.room).emit('update', data);
        Y.applyUpdate(this.docs.get(data.room), new Uint8Array(data.update));
    }
    async handleDisconnect(client) {
        const roomName = 'room1';
        const rooms = this.server.to(roomName);
        console.log(rooms);
        const clinets = await this.server.to(roomName).fetchSockets();
        this.server.to(roomName).emit('updateuser', {
            clients: clinets.map((c) => {
                return {
                    id: c.id,
                    ...avatars.get(c.id),
                };
            }),
        });
        console.log(client.id, 11111);
    }
};
exports.SocketIoGateway = SocketIoGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketIoGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SocketIoGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SocketIoGateway.prototype, "update", null);
exports.SocketIoGateway = SocketIoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'yjs',
        transports: ['websocket'],
        cors: { origin: '*' },
    })
], SocketIoGateway);
//# sourceMappingURL=socket-io.gateway.js.map