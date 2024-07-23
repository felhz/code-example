import { Tag } from 'src/tags/entity/tags.entity';
import { Repository } from 'typeorm';
export declare class TagsService {
    readonly tagsRepository: Repository<Tag>;
    constructor(tagsRepository: Repository<Tag>);
    getTags(): Promise<any>;
    addTag(): Promise<any>;
}
