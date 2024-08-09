import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';
import { WsGateway } from './ws/ws.gateway';

@Module({
  imports: [
    SocketModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WsGateway],
})
export class AppModule {}
