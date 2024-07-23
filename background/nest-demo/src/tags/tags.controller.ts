import { Controller, Get } from '@nestjs/common';
import { Tag } from 'src/tags/entity/tags.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(readonly tagsService: TagsService) {}
  @Get()
  getTags(): Promise<Tag[]> {
    return this.tagsService.getTags();
  }
  @Get('/add')
  addTag(): Promise<Tag[]> {
    return this.tagsService.addTag();
  }
}
