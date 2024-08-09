import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import { ErrorInterceptor } from './error/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ErrorInterceptor());
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(4000);
}
bootstrap();
