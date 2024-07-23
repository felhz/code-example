import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TagsController } from './tags.controller';
import { tagsProviders } from './tags.providers';
import { TagsService } from './tags.service';

@Module({
  imports: [DatabaseModule],
  exports: [TagsService, ...tagsProviders],
  controllers: [TagsController],
  providers: [TagsService, ...tagsProviders],
})
export class TagsModule {}
