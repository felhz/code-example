import { DataSource } from 'typeorm';
import { TagGroup } from './entities/tag_group.entity';
export declare const tagsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TagGroup>;
    inject: string[];
}[];
