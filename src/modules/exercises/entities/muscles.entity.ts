import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { AbstractEntityWithId } from '@/common/entities/abstract-entity-with-id.entity';

import { Exercise } from './exercise.entity';

@Entity()
export class Muscles extends AbstractEntityWithId {
  @Column()
  name: string;

  @OneToMany(() => Exercise, (exercise) => exercise.muscles)
  @JoinColumn()
  exercises: Exercise[];
}
