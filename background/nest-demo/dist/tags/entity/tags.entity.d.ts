import { TagGroup } from 'src/tag_group/entities/tag_group.entity';
export declare class Tag {
    id: number;
    name: string;
    desc: string;
    groups: TagGroup;
}
