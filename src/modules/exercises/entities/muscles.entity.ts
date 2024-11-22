import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Exercise } from './exercise.entity';

@Entity()
export class Muscles {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Exercise, (exercise) => exercise.muscles)
  @JoinColumn()
  exercises: Exercise[];
}
