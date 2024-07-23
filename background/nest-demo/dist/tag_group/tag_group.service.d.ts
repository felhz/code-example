import { Repository } from 'typeorm';
import { CreateTagGroupDto } from './dto/create-tag_group.dto';
import { UpdateTagGroupDto } from './dto/update-tag_group.dto';
import { TagGroup } from './entities/tag_group.entity';
export declare class TagGroupService {
    readonly groups: Repository<TagGroup>;
    constructor(groups: Repository<TagGroup>);
    create(createTagGroupDto: CreateTagGroupDto): string;
    findAll(): Promise<TagGroup[]>;
    findOne(id: number): string;
    update(id: number, updateTagGroupDto: UpdateTagGroupDto): string;
    remove(id: number): string;
}
