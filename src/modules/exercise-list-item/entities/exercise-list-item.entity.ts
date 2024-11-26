import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntityWithUUID } from '@/common/entities/abstract-entity-with-uuid.entity';
import { ExerciseList } from '@/modules/exercise-list/entities/exercise-list.entity';
import { Exercise } from '@/modules/exercises/entities/exercise.entity';

@Entity()
export class ExerciseListItem extends AbstractEntityWithUUID {
  @Column({ nullable: false })
  listId: string;

  @ManyToOne(() => ExerciseList)
  @JoinColumn()
  list: ExerciseList;

  @Column({ nullable: false })
  exerciseId: number;

  @ManyToOne(() => Exercise)
  @JoinColumn()
  exercise: Exercise;

  @Column({ nullable: true })
  customName: string | null;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  lastTimeUpdated: string | null;
}
