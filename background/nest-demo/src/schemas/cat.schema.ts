import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  user: String,
  roles: String,
  name: String,
});
