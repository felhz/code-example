import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TagGroupController } from './tag_group.controller';
import { tagsProviders } from './tag_group.providers';
import { TagGroupService } from './tag_group.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TagGroupController],
  providers: [TagGroupService, ...tagsProviders],
})
export class TagGroupModule {}
