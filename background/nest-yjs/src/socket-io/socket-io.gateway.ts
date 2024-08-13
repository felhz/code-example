import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import * as Y from 'yjs';
const avatars = new Map();

@WebSocketGateway({
  namespace: 'yjs',
  transports: ['websocket'],
  cors: { origin: '*' },
})
export class SocketIoGateway {
  @WebSocketServer() server: Server;
  docs = new Map();
  @SubscribeMessage('init')
  async handleMessage(client: any, data: any): Promise<any> {
    console.log(data);
    avatars.set(client.id, { ...data });
    const doc = new Y.Doc();
    if (!this.docs.has(data.room)) {
      this.docs.set(data.room, doc);
    }
    // this.server.socketsJoin(data.room);
    client.join(data.room);
    const clinets = await this.server.to(data.room).fetchSockets();
    this.server.to(data.room).emit('updateuser', {
      clients: clinets.map((c: any) => {
        return {
          id: c.id,
          ...avatars.get(c.id),
        };
      }),
    });
    return {
      room: data.room,
      doc:
        this.docs.get(data.room) &&
        Y.encodeStateAsUpdate(this.docs.get(data.room)),
      clients: clinets.map((c: any) => {
        return {
          id: c.id,
          ...avatars.get(c.id),
        };
      }),
    };
  }
  @SubscribeMessage('update')
  update(client: any, data): void {
    // Y.applyUpdate(this.docs.get(data.room), data);
    console.log(client.broadcast);
    // 不包含自己
    // client.to(data.room).emit('update', data);
    // 包含自己
    // this.server.to(data.room).emit('update', data);
    //
    client.broadcast.to(data.room).emit('update', data);
    Y.applyUpdate(this.docs.get(data.room), new Uint8Array(data.update));
    // this.server.to(data.room).emit('update', data);
    // return 'Hello world!
  }
  async handleDisconnect(client: any) {
    const roomName = 'room1';
    const rooms = this.server.to(roomName);
    console.log(rooms);
    const clinets = await this.server.to(roomName).fetchSockets();
    this.server.to(roomName).emit('updateuser', {
      clients: clinets.map((c: any) => {
        return {
          id: c.id,
          ...avatars.get(c.id),
        };
      }),
    });

    console.log(client.id, 11111);
  }
}
