import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTagGroupDto } from './dto/create-tag_group.dto';
import { UpdateTagGroupDto } from './dto/update-tag_group.dto';
import { TagGroup } from './entities/tag_group.entity';

@Injectable()
export class TagGroupService {
  constructor(
    @Inject('TagGroupRepository') readonly groups: Repository<TagGroup>,
  ) {}
  create(createTagGroupDto: CreateTagGroupDto) {
    return 'This action adds a new tagGroup';
  }

  findAll(): Promise<TagGroup[]> {
    return this.groups.find({ relations: ['tags'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} tagGroup`;
  }

  update(id: number, updateTagGroupDto: UpdateTagGroupDto) {
    return `This action updates a #${id} tagGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagGroup`;
  }
}
