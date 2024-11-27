import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntityWithUUID } from '@/common/entities/abstract-entity-with-uuid.entity';
import { ExerciseListItem } from '@/modules/exercise-list-item/entities/exercise-list-item.entity';
import { User } from '@/modules/users/entities/user.entity';

import { MAX_DESCRIPTION_LENGTH } from '../constants/validation.constants';

@Entity()
export class ExerciseList extends AbstractEntityWithUUID {
  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  name: string;

  @Column({
    nullable: true,
    length: MAX_DESCRIPTION_LENGTH,
  })
  description: string | null;

  @OneToMany(() => ExerciseListItem, (listItem) => listItem.list)
  @JoinColumn()
  listItems: ExerciseListItem[];
}
