import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DocsController } from './docs.controller';
import { DocProviders } from './docs.providers';
import { DocsService } from './docs.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DocsController],
  providers: [DocsService, ...DocProviders],
})
export class DocsModule {}
