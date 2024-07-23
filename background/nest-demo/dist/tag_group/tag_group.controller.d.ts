import { TagGroupService } from './tag_group.service';
import { CreateTagGroupDto } from './dto/create-tag_group.dto';
import { UpdateTagGroupDto } from './dto/update-tag_group.dto';
export declare class TagGroupController {
    private readonly tagGroupService;
    constructor(tagGroupService: TagGroupService);
    create(createTagGroupDto: CreateTagGroupDto): string;
    findAll(): Promise<import("./entities/tag_group.entity").TagGroup[]>;
    findOne(id: string): string;
    update(id: string, updateTagGroupDto: UpdateTagGroupDto): string;
    remove(id: string): string;
}
