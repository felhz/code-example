import { Tag } from 'src/tags/entity/tags.entity';
import { DataSource } from 'typeorm';
export declare const tagsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Tag>;
    inject: string[];
}[];
