import { TagGroup } from 'src/tag_group/entities/tag_group.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 100 })
  desc: string;
  @ManyToOne(() => TagGroup, (tag_group) => tag_group.tags)
  @JoinColumn({ name: 'group' })
  groups: TagGroup;
}
