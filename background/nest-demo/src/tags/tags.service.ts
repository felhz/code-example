import { Inject, Injectable, Logger } from '@nestjs/common';
import { Tag } from 'src/tags/entity/tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TagsRepository') readonly tagsRepository: Repository<Tag>,
  ) {}
  async getTags(): Promise<any> {
    console.log('getTags', this.tagsRepository);
    Logger.log('getTags', 'TagsService');
    return this.tagsRepository.find();
  }
  async addTag(): Promise<any> {
    return this.tagsRepository.save([]);
  }
}
