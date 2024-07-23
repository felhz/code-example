import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagGroupService } from './tag_group.service';
import { CreateTagGroupDto } from './dto/create-tag_group.dto';
import { UpdateTagGroupDto } from './dto/update-tag_group.dto';

@Controller('tag-group')
export class TagGroupController {
  constructor(private readonly tagGroupService: TagGroupService) {}

  @Post()
  create(@Body() createTagGroupDto: CreateTagGroupDto) {
    return this.tagGroupService.create(createTagGroupDto);
  }

  @Get()
  findAll() {
    return this.tagGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagGroupDto: UpdateTagGroupDto) {
    return this.tagGroupService.update(+id, updateTagGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagGroupService.remove(+id);
  }
}
