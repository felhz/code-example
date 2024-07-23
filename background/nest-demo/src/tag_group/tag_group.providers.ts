import { DataSource } from 'typeorm';
import { TagGroup } from './entities/tag_group.entity';

export const tagsProviders = [
  {
    provide: 'TagGroupRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TagGroup),
    inject: ['DATA_SOURCE'],
  },
];
