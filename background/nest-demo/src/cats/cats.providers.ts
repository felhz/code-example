import { Connection } from 'mongoose';
import { CatSchema } from '../schemas/cat.schema';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('catsd', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
