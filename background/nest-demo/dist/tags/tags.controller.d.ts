import { Tag } from 'src/tags/entity/tags.entity';
import { TagsService } from './tags.service';
export declare class TagsController {
    readonly tagsService: TagsService;
    constructor(tagsService: TagsService);
    getTags(): Promise<Tag[]>;
    addTag(): Promise<Tag[]>;
}
