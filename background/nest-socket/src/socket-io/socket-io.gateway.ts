import { Global } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
const roomName = 'demo';

@Global()
@WebSocketGateway({ transports: ['websocket'], cors: '*', namespace: 'admin' })
export class SocketIoGateway {
  @WebSocketServer()
  server;
  OnGatewayConnection(s) {
    console.log('connected', s);
  }
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    client.join(roomName);
    const rooms = this.server.to(roomName);
    console.log(rooms);
    // this.server.to(roomName).emit('hh', { some: 'data' });
    client.to(roomName).emit('hh', { some: 'data' });
    // console.log(11);

    return 'Hello world!';
  }
}
