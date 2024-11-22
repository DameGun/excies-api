import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Exercise } from './exercise.entity';

@Entity()
export class ExerciseTranslated {
  @PrimaryGeneratedColumn()
  id: number;

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
