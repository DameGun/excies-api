import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntityWithId } from '@/common/entities/abstract-entity-with-id.entity';

import { Exercise } from './exercise.entity';

@Entity()
export class ExerciseTranslated extends AbstractEntityWithId {
  @Column()
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | null;

  @Column()
  language: string;

  @Column({ nullable: true })
  exerciseId: number;

  @ManyToOne(() => Exercise, (exercise) => exercise.translated)
  @JoinColumn()
  exercise: Exercise;
}
