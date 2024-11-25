import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntityWithUUID } from '@/common/entities/abstract-entity-with-uuid.entity';
import { User } from '@/modules/users/entities/user.entity';

@Entity()
export class ExerciseList extends AbstractEntityWithUUID {
  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;
}
