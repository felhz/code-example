import { Tag } from 'src/tags/entity/tags.entity';
import { DataSource } from 'typeorm';

export const tagsProviders = [
  {
    provide: 'TagsRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tag),
    inject: ['DATA_SOURCE'],
  },
];
