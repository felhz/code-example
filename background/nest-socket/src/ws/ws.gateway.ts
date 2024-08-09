import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({ transports: ['websocket'] })
export class WsGateway {
  @WebSocketServer()
  server;
  OnGatewayConnection(client) {
    console.log('connected', client);
  }
  @SubscribeMessage('dd')
  handleMessage(
    @ConnectedSocket() client,
    @MessageBody() data: any,
  ): Observable<any> {
    client.name = data;
    setInterval(() => {
      for (const c of this.server.clients) {
        const clientsName = Array.from(this.server.clients).map(
          (c: any) => c.id + c?.name,
        );
        c.send(
          JSON.stringify({ name: c.name, data: '111', clients: clientsName }),
        );
      }
    }, 1000);
    return from([1]).pipe(map((data) => ({ data })));
  }
}
