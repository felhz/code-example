import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doc')
export class Doc {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 100 })
  flag: string;
}
