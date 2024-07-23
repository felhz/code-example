import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { DatabaseModule } from './database/database.module';
import { DocsModule } from './docs/docs.module';
import { GitlabController } from './gitlab/gitlab.controller';
import { TagGroupModule } from './tag_group/tag_group.module';
import { TagsModule } from './tags/tags.module';
@Module({
  imports: [DatabaseModule, CatsModule, TagsModule, TagGroupModule, DocsModule],

  controllers: [AppController, GitlabController],
  providers: [AppService, CatsService],
})
export class AppModule {}
