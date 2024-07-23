import { Tag } from 'src/tags/entity/tags.entity';
import { DataSource } from 'typeorm';
import { Doc } from './entities/doc.entity';

export const DocProviders = [
  {
    provide: 'DocRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Doc),
    inject: ['DATA_SOURCE'],
  },
];
