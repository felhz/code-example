import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly user: string;
  readonly roles: string;
}
