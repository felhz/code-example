import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../../tags/entity/tags.entity';

@Entity('tag_group')
export class TagGroup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  group_name: string;
  @OneToMany(() => Tag, (tag) => tag.groups)
  tags: Tag[];
}
