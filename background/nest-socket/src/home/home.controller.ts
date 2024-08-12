import { Controller, Get } from '@nestjs/common';
import { SocketIoGateway } from 'src/socket-io/socket-io.gateway';
@Controller('home')
export class HomeController {
  constructor(readonly socket: SocketIoGateway) {}
  @Get('/')
  index() {
    console.log(this.socket.server.emit('hh', { some: 'data' }));
    return 'Hello World!';
  }
}
