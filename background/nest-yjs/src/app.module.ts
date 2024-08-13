import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketIoGateway } from './socket-io/socket-io.gateway';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../static'),
    }),
  ],

  controllers: [AppController],
  providers: [AppService, SocketIoGateway],
})
export class AppModule {}
