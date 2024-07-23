import { DataSource } from 'typeorm';
import { Doc } from './entities/doc.entity';
export declare const DocProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Doc>;
    inject: string[];
}[];
